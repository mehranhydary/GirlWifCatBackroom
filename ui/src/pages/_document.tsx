import { StyledComponentsRegistry } from '@/components/StyleSheetManager'
import { GlobalStyles } from '@/styles/createGlobalStyle'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<GlobalStyles />
			<body>
				<StyledComponentsRegistry>
					<Main />
					<NextScript />
				</StyledComponentsRegistry>
			</body>
		</Html>
	)
}
