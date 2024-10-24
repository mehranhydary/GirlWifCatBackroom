import Head from 'next/head'
import styled from 'styled-components'
import { useMobile } from '@/hooks/useMobile'

export default function Socials() {
	const { isMobile } = useMobile()

	return (
		<>
			<Head>
				<title>Socials</title>
				<meta
					name='description'
					content='Links to Dexscreener, Pump.fun, and Twitter'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Container isMobile={isMobile}>
				<Title>Socials</Title>
				<LinkList isMobile={isMobile}>
					<LinkItem
						onClick={() =>
							window.open(
								`https://dexscreener.com/solana/97gqskohg97verbuwuhqu6sxp1rnw1udqj4u33rdeyyh`
							)
						}
					>
						Dexscreener
					</LinkItem>
					<LinkItem onClick={() => window.open(`https://pump.fun`)}>
						Pump.fun
					</LinkItem>
					<LinkItem
						onClick={() => window.open(`https://twitter.com`)}
					>
						Twitter
					</LinkItem>
				</LinkList>
			</Container>
		</>
	)
}

const Container = styled.div<{ isMobile: boolean }>`
	padding: ${({ isMobile }) => (isMobile ? '0rem' : '2rem')};
	min-height: 100vh;
	min-width: 100vw;
	max-width: ${({ isMobile }) => (isMobile ? '400px' : '100vw')};
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: ${({ isMobile }) => (isMobile ? 'center' : 'flex-start')};
	text-align: center;
`

const Title = styled.h1`
	font-size: 2rem;
	font-family: 'Helvetica', sans-serif;
	margin-bottom: 2rem;
`

const LinkList = styled.div<{ isMobile: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: ${({ isMobile }) => (isMobile ? 'center' : 'flex-start')};
	margin-top: 2rem;

	& > div {
		font-size: ${({ isMobile }) => (isMobile ? '1rem' : '1.5rem')};
	}
`

const LinkItem = styled.div`
	margin: 0.5rem 0;
	font-family: 'Helvetica', sans-serif;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`
