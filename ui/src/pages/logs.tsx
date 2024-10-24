import Head from 'next/head'
import styled from 'styled-components'
import { useState } from 'react'
import { useMobile } from '@/hooks/useMobile'

const logs = [
	{
		title: 'Log 1',
		content:
			'This is the content of log 1. It is a detailed journal entry that spans about 100 words. It provides insights and information about the events that took place on this particular day. The log entry is meant to be informative and engaging, giving the reader a clear understanding of the context and significance of the events described.',
	},
	{
		title: 'Log 2',
		content:
			'This is the content of log 2. It is a detailed journal entry that spans about 100 words. It provides insights and information about the events that took place on this particular day. The log entry is meant to be informative and engaging, giving the reader a clear understanding of the context and significance of the events described.',
	},
	{
		title: 'Log 3',
		content:
			'This is the content of log 3. It is a detailed journal entry that spans about 100 words. It provides insights and information about the events that took place on this particular day. The log entry is meant to be informative and engaging, giving the reader a clear understanding of the context and significance of the events described.',
	},
	{
		title: 'Log 4',
		content:
			'This is the content of log 4. It is a detailed journal entry that spans about 100 words. It provides insights and information about the events that took place on this particular day. The log entry is meant to be informative and engaging, giving the reader a clear understanding of the context and significance of the events described.',
	},
	{
		title: 'Log 5',
		content:
			'This is the content of log 5. It is a detailed journal entry that spans about 100 words. It provides insights and information about the events that took place on this particular day. The log entry is meant to be informative and engaging, giving the reader a clear understanding of the context and significance of the events described.',
	},
	{
		title: 'Log 6',
		content:
			'This is the content of log 6. It is a detailed journal entry that spans about 100 words. It provides insights and information about the events that took place on this particular day. The log entry is meant to be informative and engaging, giving the reader a clear understanding of the context and significance of the events described.',
	},
	{
		title: 'Log 7',
		content:
			'This is the content of log 7. It is a detailed journal entry that spans about 100 words. It provides insights and information about the events that took place on this particular day. The log entry is meant to be informative and engaging, giving the reader a clear understanding of the context and significance of the events described.',
	},
	{
		title: 'Log 8',
		content:
			'This is the content of log 8. It is a detailed journal entry that spans about 100 words. It provides insights and information about the events that took place on this particular day. The log entry is meant to be informative and engaging, giving the reader a clear understanding of the context and significance of the events described.',
	},
	{
		title: 'Log 9',
		content:
			'This is the content of log 9. It is a detailed journal entry that spans about 100 words. It provides insights and information about the events that took place on this particular day. The log entry is meant to be informative and engaging, giving the reader a clear understanding of the context and significance of the events described.',
	},
	{
		title: 'Log 10',
		content:
			'This is the content of log 10. It is a detailed journal entry that spans about 100 words. It provides insights and information about the events that took place on this particular day. The log entry is meant to be informative and engaging, giving the reader a clear understanding of the context and significance of the events described.',
	},
]

export default function Logs() {
	const { isMobile } = useMobile()
	const [selectedLog, setSelectedLog] = useState(logs[0])

	return (
		<>
			<Head>
				<title>Logs</title>
				<meta name='description' content='View detailed logs' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Container isMobile={isMobile}>
				<LogList isMobile={isMobile}>
					{logs.map((log, index) => (
						<LogItem
							key={index}
							onClick={() => setSelectedLog(log)}
						>
							{log.title}
						</LogItem>
					))}
				</LogList>
				<LogContent isMobile={isMobile}>
					<LogTitle>{selectedLog.title}</LogTitle>
					<LogDescription>{selectedLog.content}</LogDescription>
				</LogContent>
			</Container>
		</>
	)
}

const Container = styled.div<{ isMobile: boolean }>`
	display: flex;
	flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
	padding: ${({ isMobile }) => (isMobile ? '0rem' : '2rem')};
	min-height: 100vh;
	min-width: 100vw;
	max-width: ${({ isMobile }) => (isMobile ? '400px' : '100vw')};
	background-size: cover;
	justify-content: center;
	align-items: ${({ isMobile }) => (isMobile ? 'center' : 'flex-start')};
	text-align: center;
`

const LogList = styled.div<{ isMobile: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: ${({ isMobile }) => (isMobile ? 'center' : 'flex-start')};
	width: ${({ isMobile }) => (isMobile ? '100%' : '30%')};
	overflow-y: auto;
	max-height: 50vh;
	margin-right: ${({ isMobile }) => (isMobile ? '0' : '2rem')};
`

const LogItem = styled.div`
	margin: 0.5rem 0;
	font-family: 'Helvetica', sans-serif;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`

const LogContent = styled.div<{ isMobile: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: ${({ isMobile }) => (isMobile ? 'center' : 'flex-start')};
	width: ${({ isMobile }) => (isMobile ? '100%' : '70%')};
`

const LogTitle = styled.h1`
	font-size: 2rem;
	font-family: 'Helvetica', sans-serif;
	margin-bottom: 1rem;
`

const LogDescription = styled.p`
	font-size: 1rem;
	font-family: 'Helvetica', sans-serif;
	text-align: left;
`
