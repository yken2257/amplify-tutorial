import { useState } from "react";
import { TopNavigation } from "@cloudscape-design/components";
import ApiKeyMordal from "./ApiKeyMordal";

export default function NavigationBar({ signOut, user }) {
    const { attributes } = user;
    const [viewApIkeyModal, setViewApIkeyModal] = useState(false);
  
    function handleSettingsItemClick({detail}) {
      if (detail.id === "signout") {
        return signOut()
      } else if (detail.id === "view-api-mordal") {
        setViewApIkeyModal(true);
        return;
      }
    };

    return (
        <>
        <ApiKeyMordal
        visible={viewApIkeyModal}
        user={user}
        onDismissApiKeyMordal={() => setViewApIkeyModal(false)}  
        />
        <TopNavigation
            identity={{
                href: "",
                title: "Cloudscape demo app",
                logo: {
                src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9ImJvZHlfMSIgd2lkdGg9IjE4NSIgaGVpZ2h0PSIxNzQiPgoKPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoICBpZD0iMSI+CgogICAgICAgICAgICA8cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDBMMTg1IDBMMTg1IDE3NEwwIDE3NHoiIC8+ICAgICAgICA8L2NsaXBQYXRoPgogICAgICAgICAgICA8Y2xpcFBhdGggIGlkPSIyIj4KCiAgICAgICAgICAgICAgICA8cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE3My42NjRMMCAwTDE4NSAwTDE4NSAxNzMuNjY0eiIgLz4gICAgICAgICAgICA8L2NsaXBQYXRoPgogICAgICAgICAgICA8Y2xpcFBhdGggIGlkPSIzIj4KCiAgICAgICAgICAgICAgICA8cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE3My42NjRMMCAwTDE4NSAwTDE4NSAxNzMuNjY0eiIgLz4gICAgICAgICAgICA8L2NsaXBQYXRoPgogICAgICAgICAgICA8Y2xpcFBhdGggIGlkPSI0Ij4KCiAgICAgICAgICAgICAgICA8cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE3My42NjRMMCAwTDE4NSAwTDE4NSAxNzMuNjY0eiIgLz4gICAgICAgICAgICA8L2NsaXBQYXRoPgogICAgICAgICAgICA8Y2xpcFBhdGggIGlkPSI1Ij4KCiAgICAgICAgICAgICAgICA8cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE3My42NjRMMCAwTDE4NSAwTDE4NSAxNzMuNjY0eiIgLz4gICAgICAgICAgICA8L2NsaXBQYXRoPgogICAgICAgICAgICA8Y2xpcFBhdGggIGlkPSI2Ij4KCiAgICAgICAgICAgICAgICA8cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE3My42NjRMMCAwTDE4NSAwTDE4NSAxNzMuNjY0eiIgLz4gICAgICAgICAgICA8L2NsaXBQYXRoPgogICAgICAgICAgICA8Y2xpcFBhdGggIGlkPSI3Ij4KCiAgICAgICAgICAgICAgICA8cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE3My42NjRMMCAwTDE4NSAwTDE4NSAxNzMuNjY0eiIgLz4gICAgICAgICAgICA8L2NsaXBQYXRoPgogICAgICAgICAgICA8Y2xpcFBhdGggIGlkPSI4Ij4KCiAgICAgICAgICAgICAgICA8cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE3My42NjRMMCAwTDE4NSAwTDE4NSAxNzMuNjY0eiIgLz4gICAgICAgICAgICA8L2NsaXBQYXRoPgogICAgICAgICAgICA8Y2xpcFBhdGggIGlkPSI5Ij4KCiAgICAgICAgICAgICAgICA8cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE3My42NjRMMCAwTDE4NSAwTDE4NSAxNzMuNjY0eiIgLz4gICAgICAgICAgICA8L2NsaXBQYXRoPgogICAgICAgICAgICA8Y2xpcFBhdGggIGlkPSIxMCI+CgogICAgICAgICAgICAgICAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAxNzMuNjY0TDAgMEwxODUgMEwxODUgMTczLjY2NHoiIC8+ICAgICAgICAgICAgPC9jbGlwUGF0aD4KICAgICAgICAgICAgPGNsaXBQYXRoICBpZD0iMTEiPgoKICAgICAgICAgICAgICAgIDxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMTczLjY2NEwwIDBMMTg1IDBMMTg1IDE3My42NjR6IiAvPiAgICAgICAgICAgIDwvY2xpcFBhdGg+CiAgICAgICAgICAgIDxjbGlwUGF0aCAgaWQ9IjEyIj4KCiAgICAgICAgICAgICAgICA8cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE3My42NjRMMCAwTDE4NSAwTDE4NSAxNzMuNjY0eiIgLz4gICAgICAgICAgICA8L2NsaXBQYXRoPgogICAgICAgICAgICA8Y2xpcFBhdGggIGlkPSIxMyI+CgogICAgICAgICAgICAgICAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAxNzMuNjY0TDAgMEwxODUgMEwxODUgMTczLjY2NHoiIC8+ICAgICAgICAgICAgPC9jbGlwUGF0aD4KICAgICAgICAgICAgPGNsaXBQYXRoICBpZD0iMTQiPgoKICAgICAgICAgICAgICAgIDxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMTczLjY2NEwwIDBMMTg1IDBMMTg1IDE3My42NjR6IiAvPiAgICAgICAgICAgIDwvY2xpcFBhdGg+CiAgICAgICAgICAgIDxjbGlwUGF0aCAgaWQ9IjE1Ij4KCiAgICAgICAgICAgICAgICA8cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE3My42NjRMMCAwTDE4NSAwTDE4NSAxNzMuNjY0eiIgLz4gICAgICAgICAgICA8L2NsaXBQYXRoPgogICAgICAgICAgICA8Y2xpcFBhdGggIGlkPSIxNiI+CgogICAgICAgICAgICAgICAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAxNzMuNjY0TDAgMEwxODUgMEwxODUgMTczLjY2NHoiIC8+ICAgICAgICAgICAgPC9jbGlwUGF0aD4KPC9kZWZzPgoKPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4zMzMzMzM0IDAgMCAxLjMzMzMzMzQgMCAwKSI+CiAgICA8cGF0aCBkPSJNMCAwTDEzOC43NSAwTDEzOC43NSAxMzAuNUwwIDEzMC41eiIgc3Ryb2tlPSJub25lIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIC8+Cgk8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjc1IDAgMCAtMC43NSAtMCAxMzAuNSkiIGNsaXAtcGF0aD0idXJsKCMxKSIgPgogICAgICAgIDxwYXRoIGQ9Ik0wIDBMMTg1IDBMMTg1IDE3NEwwIDE3NHoiIHN0cm9rZT0ibm9uZSIgZmlsbD0ibm9uZSIgLz4KICAgICAgICA8cGF0aCBkPSJNMCAwTDE4NSAwTDE4NSAxNzRMMCAxNzR6IiBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIC8+CiAgICAgICAgPHBhdGggZD0iTTAgMEwxODUgMEwxODUgMTc0TDAgMTc0eiIgc3Ryb2tlPSJub25lIiBmaWxsPSJub25lIiAvPgogICAgICAgIDxwYXRoIGQ9Ik0wIDBMMTg1IDBMMTg1IDE3NEwwIDE3NHoiIHN0cm9rZT0ibm9uZSIgZmlsbD0ibm9uZSIgLz4KICAgICAgICA8cGF0aCBkPSJNMCAwTDE4NSAwTDE4NSAxNzRMMCAxNzR6IiBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIC8+CiAgICAgICAgPHBhdGggZD0iTTAgMTczLjY2NEwwIDBMMTg1IDBMMTg1IDE3My42NjR6IiBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIC8+CiAgICAgICAgPHBhdGggY2xpcC1wYXRoPSJ1cmwoIzIpIiAgZD0iTTE4NSAwTDAgMEwwIDE3My42NjRMMTg1IDE3My42NjRMMTg1IDB6IiBzdHJva2U9Im5vbmUiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgLz4KICAgICAgICA8cGF0aCBjbGlwLXBhdGg9InVybCgjMykiICBkPSJNMTEzLjcxNyAyMy4xODIwMDdMNzEuMjgzMyAyMy4xODIwMDdMNzEuMjgzMyA2NS42MTVMMjguODQ5NCA2NS42MTVMMjguODQ5NCAxMDguMDQ5TDcxLjI4MzMgMTA4LjA0OUw3MS4yODMzIDY1LjYxNUwxMTMuNzE3IDY1LjYxNUwxMTMuNzE3IDIzLjE4MjAwNyIgc3Ryb2tlPSJub25lIiBmaWxsPSJub25lIiAvPgogICAgICAgIDxwYXRoIGNsaXAtcGF0aD0idXJsKCM0KSIgIGQ9Ik0xMTMuNzE3IDIzLjE4MjAwN0w3MS4yODMzIDIzLjE4MjAwN0w3MS4yODMzIDY1LjYxNUwyOC44NDk0IDY1LjYxNUwyOC44NDk0IDEwOC4wNDlMNzEuMjgzMyAxMDguMDQ5TDcxLjI4MzMgNjUuNjE1TDExMy43MTcgNjUuNjE1TDExMy43MTcgMjMuMTgyMDA3eiIgc3Ryb2tlPSJub25lIiBmaWxsPSIjMUYzRjVEIiBmaWxsLXJ1bGU9Im5vbnplcm8iIC8+CiAgICAgICAgPHBhdGggZD0iIiBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIC8+CiAgICAgICAgPHBhdGggY2xpcC1wYXRoPSJ1cmwoIzUpIiAgZD0iTTExMy43MTcgMjMuMTgyMDA3TDcxLjI4MzMgMjMuMTgyMDA3TDcxLjI4MzMgNjUuNjE1TDI4Ljg0OTQgNjUuNjE1TDI4Ljg0OTQgMTA4LjA0OUw3MS4yODMzIDEwOC4wNDlMNzEuMjgzMyA2NS42MTVMMTEzLjcxNyA2NS42MTVMMTEzLjcxNyAyMy4xODIwMDciIHN0cm9rZT0ibm9uZSIgZmlsbD0ibm9uZSIgLz4KICAgICAgICA8cGF0aCBjbGlwLXBhdGg9InVybCgjNikiICBkPSJNMTEzLjcxNyAyMy4xODIwMDdMNzEuMjgzMyAyMy4xODIwMDdMNzEuMjgzMyA2NS42MTVMMjguODQ5NCA2NS42MTVMMjguODQ5NCAxMDguMDQ5TDcxLjI4MzMgMTA4LjA0OUw3MS4yODMzIDY1LjYxNUwxMTMuNzE3IDY1LjYxNUwxMTMuNzE3IDIzLjE4MjAwNyIgc3Ryb2tlPSJub25lIiBmaWxsPSJub25lIiAvPgogICAgICAgIDxwYXRoIGNsaXAtcGF0aD0idXJsKCM3KSIgIGQ9Ik03MS4yODMyIDIzLjE4MjAwN0wyOC44NDk2IDIzLjE4MjAwN0wyOC44NDk2IDY1LjYxNUw3MS4yODMyIDY1LjYxNUw3MS4yODMyIDIzLjE4MjAwN3oiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiAvPgogICAgICAgIDxwYXRoIGNsaXAtcGF0aD0idXJsKCM4KSIgIGQ9Ik0xNTYuMTUxIDY1LjYxNUwxMTMuNzE3IDY1LjYxNUwxMTMuNzE3IDEwOC4wNDlMNzEuMjgzMyAxMDguMDQ5TDcxLjI4MzMgMTUwLjQ4MjZMMTEzLjcxNyAxNTAuNDgyNkwxMTMuNzE3IDEwOC4wNDlMMTU2LjE1MSAxMDguMDQ5TDE1Ni4xNTEgNjUuNjE1IiBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIC8+CiAgICAgICAgPHBhdGggY2xpcC1wYXRoPSJ1cmwoIzkpIiAgZD0iTTE1Ni4xNTEgNjUuNjE1TDExMy43MTcgNjUuNjE1TDExMy43MTcgMTA4LjA0OUw3MS4yODMzIDEwOC4wNDlMNzEuMjgzMyAxNTAuNDgyNkwxMTMuNzE3IDE1MC40ODI2TDExMy43MTcgMTA4LjA0OUwxNTYuMTUxIDEwOC4wNDlMMTU2LjE1MSA2NS42MTV6IiBzdHJva2U9Im5vbmUiIGZpbGw9IiNBN0IzQkYiIGZpbGwtcnVsZT0ibm9uemVybyIgLz4KICAgICAgICA8cGF0aCBkPSIiIHN0cm9rZT0ibm9uZSIgZmlsbD0ibm9uZSIgLz4KICAgICAgICA8cGF0aCBjbGlwLXBhdGg9InVybCgjMTApIiAgZD0iTTE1Ni4xNTEgNjUuNjE1TDExMy43MTcgNjUuNjE1TDExMy43MTcgMTA4LjA0OUw3MS4yODMzIDEwOC4wNDlMNzEuMjgzMyAxNTAuNDgyNkwxMTMuNzE3IDE1MC40ODI2TDExMy43MTcgMTA4LjA0OUwxNTYuMTUxIDEwOC4wNDlMMTU2LjE1MSA2NS42MTUiIHN0cm9rZT0ibm9uZSIgZmlsbD0ibm9uZSIgLz4KICAgICAgICA8cGF0aCBjbGlwLXBhdGg9InVybCgjMTEpIiAgZD0iTTE1Ni4xNTEgNjUuNjE1TDExMy43MTcgNjUuNjE1TDExMy43MTcgMTA4LjA0OUw3MS4yODMzIDEwOC4wNDlMNzEuMjgzMyAxNTAuNDgyNkwxMTMuNzE3IDE1MC40ODI2TDExMy43MTcgMTA4LjA0OUwxNTYuMTUxIDEwOC4wNDlMMTU2LjE1MSA2NS42MTUiIHN0cm9rZT0ibm9uZSIgZmlsbD0ibm9uZSIgLz4KICAgICAgICA8cGF0aCBjbGlwLXBhdGg9InVybCgjMTIpIiAgZD0iTTExMy43MTcgNjUuNjE1TDcxLjI4MzMgNjUuNjE1TDcxLjI4MzMgMTA4LjA0OUwxMTMuNzE3IDEwOC4wNDlMMTEzLjcxNyA2NS42MTUiIHN0cm9rZT0ibm9uZSIgZmlsbD0ibm9uZSIgLz4KICAgICAgICA8cGF0aCBjbGlwLXBhdGg9InVybCgjMTMpIiAgZD0iTTExMy43MTcgNjUuNjE1TDcxLjI4MzMgNjUuNjE1TDcxLjI4MzMgMTA4LjA0OUwxMTMuNzE3IDEwOC4wNDlMMTEzLjcxNyA2NS42MTV6IiBzdHJva2U9Im5vbmUiIGZpbGw9IiNDNkNFRDYiIGZpbGwtcnVsZT0ibm9uemVybyIgLz4KICAgICAgICA8cGF0aCBkPSIiIHN0cm9rZT0ibm9uZSIgZmlsbD0ibm9uZSIgLz4KICAgICAgICA8cGF0aCBjbGlwLXBhdGg9InVybCgjMTQpIiAgZD0iTTExMy43MTcgNjUuNjE1TDcxLjI4MzMgNjUuNjE1TDcxLjI4MzMgMTA4LjA0OUwxMTMuNzE3IDEwOC4wNDlMMTEzLjcxNyA2NS42MTUiIHN0cm9rZT0ibm9uZSIgZmlsbD0ibm9uZSIgLz4KICAgICAgICA8cGF0aCBjbGlwLXBhdGg9InVybCgjMTUpIiAgZD0iTTExMy43MTcgNjUuNjE1TDcxLjI4MzMgNjUuNjE1TDcxLjI4MzMgMTA4LjA0OUwxMTMuNzE3IDEwOC4wNDlMMTEzLjcxNyA2NS42MTUiIHN0cm9rZT0ibm9uZSIgZmlsbD0ibm9uZSIgLz4KICAgICAgICA8cGF0aCBjbGlwLXBhdGg9InVybCgjMTYpIiAgZD0iTTE1Ni4xNSAxMDguMDQ4OTA0TDExMy43MTcgMTA4LjA0ODkwNEwxMTMuNzE3IDE1MC40ODI1TDE1Ni4xNSAxNTAuNDgyNUwxNTYuMTUgMTA4LjA0ODkwNHoiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiAvPgogICAgICAgIDxwYXRoIGQ9IiIgc3Ryb2tlPSJub25lIiBmaWxsPSJub25lIiAvPgogICAgICAgIDxwYXRoIGQ9IiIgc3Ryb2tlPSJub25lIiBmaWxsPSJub25lIiAvPgogICAgICAgIDxwYXRoIGQ9Ik0wIDBMMTg1IDBMMTg1IDE3NEwwIDE3NHoiIHN0cm9rZT0ibm9uZSIgZmlsbD0ibm9uZSIgLz4KICAgICAgICA8cGF0aCBkPSJNMCAwTDE4NSAwTDE4NSAxNzRMMCAxNzR6IiBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIC8+Cgk8L2c+CjwvZz4KPC9zdmc+",
                alt: "Cloudscape demo app"
                }
            }}
            utilities={[
                {
                    type: "menu-dropdown",
                    text: "Menu",
                    iconName: "menu",
                    ariaLabel: "Menu",
                    title: "Menu",
                    items: [
                        {
                            id: "api-group",
                            text: "API Client",
                            items: [
                                {
                                    id: "sendgrid-api-client",
                                    text: "Web API v3",
                                    href: "#"
                                },
                                {
                                    id: "custom-api-client",
                                    text: "Custom Request",
                                    href: "#"
                                },
                                {
                                    id: "mail-send-helper",
                                    text: "Mail Send Helper",
                                    href: "#"
                                },
                                {
                                    id: "reseller-api-client",
                                    text: "Reseller API",
                                    disabled: true,
                                    disabledReason: "Unauthorized"
                                }
                            ]
                        },
                        {
                            id: "viewer-group",
                            text: "Viewer",
                            items: [
                                {
                                    id: "sendgrid-api-client",
                                    text: "Email Activity",
                                    href: "#"
                                },
                                {
                                    id: "stats-viewer",
                                    text: "Global Stats",
                                    href: "#"
                                },
                            ]
                        },
                        {
                            id: "tool-group",
                            text: "Tools",
                            items: [
                                {
                                    id: "email-decoder",
                                    text: "Email Analyzer",
                                    href: "#"
                                },
                                {
                                    id: "json-formatter",
                                    text: "JSON Formatter",
                                    href: "#"
                                },
                            ]
                        }
                    ]
                },
                {
                    type: "button",
                    iconName: "key",
                    text: "API Key",
                    ariaLabel: "Api Key",
                    disableUtilityCollapse: false,
                    onClick: () => setViewApIkeyModal(true)
                },
                {
                type: "menu-dropdown",
                description: attributes.email,
                iconName: "user-profile",
                onItemClick: handleSettingsItemClick,
                items: [
                    {
                        id: "view-api-mordal",
                        text: "API Keys"
                    },
                    {
                        id: "profile",
                        text: "Profile",
                        disabled: true,
                        disabledReason: "Unimplemented"
                    },
                    {
                        id: "preferences",
                        text: "Preferences",
                        disabled: true,
                        disabledReason: "Unimplemented"
                    },
                    {
                        id: "links-group",
                        text: "Links",
                        items: [
                            {
                            id: "documentation",
                            text: "Documentation",
                            href: "#",
                            external: true,
                            externalIconAriaLabel:
                                " (opens in new tab)"
                            },
                            { id: "support", text: "Support" },
                        ]
                    },
                    { id: "signout", text: "Sign out" }
                ]
                }
            ]}
            i18nStrings={{
                searchIconAriaLabel: "Search",
                searchDismissIconAriaLabel: "Close search",
                overflowMenuTriggerText: "More",
                overflowMenuTitleText: "All",
                overflowMenuBackIconAriaLabel: "Back",
                overflowMenuDismissIconAriaLabel: "Close menu"
            }}
        />
        </>
    );
}