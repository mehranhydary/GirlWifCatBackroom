import Head from 'next/head'
import styled from 'styled-components'
import { useMobile } from '@/hooks/useMobile'

export default function Chatroom() {
	const { isMobile } = useMobile()

	return (
		<>
			<Head>
				<title>Chatroom</title>
				<meta name='description' content='Chatroom conversation' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Container isMobile={isMobile}>
				<Title>Chatroom</Title>
				<ChatContainer isMobile={isMobile}>
					<Message isMobile={isMobile} sender='user1'>
						Hello! How are you?
					</Message>
					<Message isMobile={isMobile} sender='user2'>
						I'm good, thank you! How about you?
					</Message>
					<Message isMobile={isMobile} sender='user1'>
						I'm doing well, thanks for asking!
					</Message>
				</ChatContainer>
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

const ChatContainer = styled.div<{ isMobile: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: ${({ isMobile }) => (isMobile ? 'center' : 'flex-end')};
	width: ${({ isMobile }) => (isMobile ? '100%' : '30%')};
	background-color: #f0f0f0;
	padding: 1rem;
	border-radius: 8px;
`

const Message = styled.div<{ isMobile: boolean; sender: string }>`
	background-color: ${({ sender }) =>
		sender === 'user1' ? '#d1e7dd' : '#f8d7da'};
	color: ${({ sender }) => (sender === 'user1' ? '#0f5132' : '#842029')};
	padding: 0.5rem 1rem;
	border-radius: 8px;
	margin: 0.5rem 0;
	align-self: ${({ sender }) =>
		sender === 'user1' ? 'flex-start' : 'flex-end'};
	font-family: 'Helvetica', sans-serif;
	font-size: ${({ isMobile }) => (isMobile ? '1rem' : '1.5rem')};
`
