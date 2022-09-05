import { Text } from '@ui5/webcomponents-react'

export default function Footer() {
  return (
    <footer className="flex justify-center sm:justify-end">
      <Text className="my-2 ml-2 mr-4 text-xs italic sm:mr-16">
        Built with{' '}
        <a
          className="underline"
          href="https://sap.github.io/ui5-webcomponents-react/?path=/docs/getting-started--page&globals=theme:sap_horizon"
          target="_blank"
          rel="noopener noreferrer"
        >
          UI5 Web Components for React
        </a>
        , theme: Horizon
      </Text>
    </footer>
  )
}
