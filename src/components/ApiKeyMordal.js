import { useEffect, useState, useContext } from "react";
import { DataStore } from "aws-amplify";
import { AES, enc } from "crypto-js";
import { ApiKey } from "../models";
import { ApiKeyContext } from "./ApiKeyProvider";

import { 
    Box,
    Button,
    Header,
    Input,
    Modal,
    SpaceBetween,
    Table
} from "@cloudscape-design/components";

export default function ApiKeyMordal(props) {
  const { selectedKey, setSelectedKey } = useContext(ApiKeyContext);
  const [ apiKey, setApiKey ] = useState();
  const [tmpApiKey, setTmpApiKey] = useState(apiKey);
  const [loadingKeys, setLoadingKeys] = useState(false);
  const { username } = props.user;

  async function fetchApiKeys () {
    setLoadingKeys(true);
    const apiKeys = await DataStore.query(ApiKey, c => c.user.eq(username));
    const objects = apiKeys.map(apiKey => {
      return {
        id: apiKey.id,
        name: AES.decrypt(apiKey.name, "SECRET_KEY").toString(enc.Utf8),
        value: AES.decrypt(apiKey.value, "SECRET_KEY").toString(enc.Utf8)
      }
    });
    setApiKey(objects);
    setTmpApiKey(objects);
    setLoadingKeys(false);
  }

  useEffect(() => {
    if (props.visible) {
      fetchApiKeys();
    }
  }, [props.visible]);

  const generateId = (length) => {
    let result = '';
    const characters = 'abcdef0123456789';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  const handleDismissMordal = () => {
    setTmpApiKey(apiKey);
    props.onDismissApiKeyMordal();
  }

  const handleRegisterApiKey = () => {
    console.log(apiKey);
    console.log(tmpApiKey);
    props.onDismissApiKeyMordal();
    const updateApiKeys = async () => {
      const itemsToAdd = tmpApiKey.filter(items2 => !apiKey.some(item1 => item1.id === items2.id));
      for (let item of itemsToAdd) {
        await DataStore.save(new ApiKey({
          user: username,
          name: AES.encrypt(item.name, "SECRET_KEY").toString(),
          value: AES.encrypt(item.value, "SECRET_KEY").toString()
        }));
      }

      const itemsToChange = tmpApiKey.filter(item2 => apiKey.some(item1 => (item1.id === item2.id && (item1.name !== item2.name || item1.value !== item2.value))));
      for (let item of itemsToChange) {
        const original = await DataStore.query(ApiKey, item.id);
        await DataStore.save(
          ApiKey.copyOf(original, updated => {
            updated.name = AES.encrypt(item.name, "SECRET_KEY").toString()
            updated.value = AES.encrypt(item.value, "SECRET_KEY").toString()
          })
        );
      }

      const idsToDelete = apiKey.filter(item1 => !tmpApiKey.some(item2 => item2.id === item1.id)).map(item => item.id);
      if (idsToDelete.length > 0) {
        await DataStore.delete(ApiKey, c => c.or(c => idsToDelete.map((idToDelete) => c.id.eq(idToDelete))));
      }
    };
    updateApiKeys();
    setApiKey(tmpApiKey);
    setSelectedKey(selectedItems[0]);
  };

  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemChange = (modifiedItem, modifiedColumn, newValue) => {
    const updatedItems = tmpApiKey.map(item => {
      if (modifiedColumn.id === "value" && item.name === modifiedItem.name && item.id === modifiedItem.id) {
        return {...item, value: newValue};
      } else if (modifiedColumn.id === "name" && item.value === modifiedItem.value && item.id === modifiedItem.id) {
        return {...item, name: newValue};
      }
      return item;
    });
    setTmpApiKey(updatedItems);
    console.log(tmpApiKey);
  }

  const handleAddItem = () => {
    const newItem = {
      id: generateId(10),
      name: "KEY_NAME",
      value: "KEY_VALUE"
    }
    setTmpApiKey(prevItems => ([...prevItems, newItem]));
    console.log(tmpApiKey);
  }
  
  const handleDeleteItem = () => {
    const targetItem = selectedItems[0];
    const updatedItems = tmpApiKey.filter(item => !(item.id === targetItem.id &&item.name === targetItem.name && item.value === targetItem.value));
    setTmpApiKey(updatedItems);
    setSelectedItems([]);
  }

  return (
    <Modal
      onDismiss={handleDismissMordal}
      visible={props.visible}
      closeAriaLabel="Close modal"
      size="large"
      footer={
        <Box float="right">
          <SpaceBetween direction="horizontal" size="xs">
            <Button 
              variant="link"
              onClick={handleDismissMordal}
              >
                Cancel
            </Button>
            <Button 
              variant="primary"
              onClick={handleRegisterApiKey}
              disabled={selectedItems.length === 0}
            >
              Save & use selected key
            </Button>
          </SpaceBetween>
        </Box>
      }
      header={
        <Header>
          API Keys
        </Header>
      }
    >
      <Table
        onSelectionChange={({ detail }) =>
        setSelectedItems(detail.selectedItems)
        }
        selectedItems={selectedItems}
        columnDefinitions={[
          {
            id: "name",
            header: "name",
            // minWidth: 176,
            cell: item => {
              return item.name;
            },
            editConfig: {
              ariaLabel: "Name",
              editIconAriaLabel: "editable",
              errorIconAriaLabel: "Name Error",
              editingCell: (
                item,
                { currentValue, setValue }
              ) => {
                return (
                  <Input
                    autoFocus={true}
                    value={currentValue ?? item.name}
                    onChange={event =>
                      setValue(event.detail.value)
                    }
                  />
                );
              }
            }
          },
          {
            id: "value",
            header: "value",
            minWidth: 176,
            maxWidth: 500,
            cell: item => {
              return item.value;
            },
            editConfig: {
              ariaLabel: "Value",
              editIconAriaLabel: "editable",
              errorIconAriaLabel: "Value Error",
              validation: (item, value) => {
                if (value) {
                  return value.match(/^SG\..{22}\..{43}$/) ? undefined : "Format error"
                }
              },
              editingCell: (
                item,
                { currentValue, setValue }
              ) => {
                return (
                  <Input
                    autoFocus={true}
                    value={currentValue ?? item.value}
                    onChange={event =>
                      setValue(event.detail.value)
                    }
                  />
                );
              }
            }
          }
        ]}
        items={tmpApiKey}
        loading={loadingKeys}
        loadingText="Loading..."
        submitEdit={(item, column, newValue) => handleItemChange(item, column, newValue)}
        trackBy="id"
        variant="embedded"
        selectionType="single"
        empty={
          <Box textAlign="center" color="inherit">
            <b>No keys</b>
            <Box
              padding={{ bottom: "s" }}
              variant="p"
              color="inherit"
            >
              No keys to display.
            </Box>
            <Button
             onClick={handleAddItem}
             >
              Add first key
            </Button>
          </Box>
        }
        header={
          <Header
            actions={
              <SpaceBetween direction="horizontal" size="xxs">
                <Button
                  variant="link"
                  iconAlign="left"
                  iconName="remove"
                  onClick={handleDeleteItem}
                  disabled={selectedItems.length === 0}
                >
                  Delete selected key
                </Button>
                <Button
                  iconAlign="left"
                  iconName="add-plus"
                  onClick={handleAddItem}
                >
                  Add new key
                </Button>
              </SpaceBetween>
            }
          ></Header>
          }
      />
    </Modal>
  );
}