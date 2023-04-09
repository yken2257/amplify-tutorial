import {
  AppLayout,
  ContentLayout,
  Header,
} from "@cloudscape-design/components";

import DbTable from "./DbTable";

export default function HomePage({user}) {
  const { username } = user;

  return (
    <AppLayout
      toolsHide={true}
      navigationHide={true}
      content={
        <ContentLayout
          header={
            <Header
              variant="h1"
            >
              Hello, {username}
            </Header>
          }
        >
          <DbTable/>
        </ContentLayout>
      }
    />
  );
}