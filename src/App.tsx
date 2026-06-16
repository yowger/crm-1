import { GitHubBanner, Refine, WelcomePage } from "@refinedev/core"
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools"
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar"
import { useNotificationProvider } from "@refinedev/antd"
import "@refinedev/antd/dist/reset.css"
import dataProvider, {
    GraphQLClient,
    liveProvider,
} from "@refinedev/nestjs-query"
import routerProvider, {
    DocumentTitleHandler,
    UnsavedChangesNotifier,
} from "@refinedev/react-router"
import { App as AntdApp } from "antd"
import { BrowserRouter, Route, Routes } from "react-router"
import { createClient } from "graphql-ws"

import { authProvider } from "./providers/auth"
import { Home } from "./pages/Home"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import { ForgotPassword } from "./pages/ForgotPassword"

const API_URL = "https://api.nestjs-query.refine.dev/graphql"
const WS_URL = "wss://api.nestjs-query.refine.dev/graphql"

const gqlClient = new GraphQLClient(API_URL)
const wsClient = createClient({ url: WS_URL })

function App() {
    return (
        <BrowserRouter>
            <GitHubBanner />
            <RefineKbarProvider>
                <AntdApp>
                    <DevtoolsProvider>
                        <Refine
                            dataProvider={dataProvider(gqlClient)}
                            liveProvider={liveProvider(wsClient)}
                            notificationProvider={useNotificationProvider}
                            routerProvider={routerProvider}
                            authProvider={authProvider}
                            options={{
                                syncWithLocation: true,
                                warnWhenUnsavedChanges: true,
                                projectId: "InBoqM-aW2aYw-ONAijf",
                                liveMode: "auto",
                            }}
                        >
                            <Routes>
                                <Route index element={<WelcomePage />} />
                                <Route index element={<Home />} />
                                <Route
                                    path="/register"
                                    element={<Register />}
                                />
                                <Route path="/login" element={<Login />} />
                                <Route
                                    path="/forgot-password"
                                    element={<ForgotPassword />}
                                />
                            </Routes>
                            <RefineKbar />
                            <UnsavedChangesNotifier />
                            <DocumentTitleHandler />
                        </Refine>
                        <DevtoolsPanel />
                    </DevtoolsProvider>
                </AntdApp>
            </RefineKbarProvider>
        </BrowserRouter>
    )
}

export default App
