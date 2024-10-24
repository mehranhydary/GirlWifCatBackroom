import Head from 'next/head'
import styled from 'styled-components'
import { useMobile } from '@/hooks/useMobile'

export default function Codex() {
	const { isMobile } = useMobile()

	return (
		<>
			<Head>
				<title>Codex</title>
				<meta name='description' content='Learn more about the Codex' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Container isMobile={isMobile}>
				<Title>Codex</Title>
				<Description isMobile={isMobile}>
					Welcome to the Codex. Here, we explore the intricate details
					and fascinating aspects of our project. Our goal is to
					provide you with comprehensive information and insights that
					will help you understand the core values and vision behind
					our work.
				</Description>
				<Description isMobile={isMobile}>
					We believe in transparency, innovation, and community
					engagement. Through this Codex, we aim to share our journey,
					challenges, and achievements with you. Stay tuned for more
					updates and feel free to reach out with any questions or
					feedback.
				</Description>
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

const Description = styled.p<{ isMobile: boolean }>`
	font-size: ${({ isMobile }) => (isMobile ? '1rem' : '1.5rem')};
	font-family: 'Helvetica', sans-serif;
	margin-bottom: 1rem;
	text-align: ${({ isMobile }) => (isMobile ? 'center' : 'left')};
`
