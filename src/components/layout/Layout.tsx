import { ThemedLayout, ThemedTitle } from "@refinedev/antd"
import { Header } from "./Header"

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <ThemedLayout
            Header={Header}
            Title={(titleProps) => (
                <ThemedTitle {...titleProps} text="Placeholder Title" />
            )}
        >
            {children}
        </ThemedLayout>
    )
}
