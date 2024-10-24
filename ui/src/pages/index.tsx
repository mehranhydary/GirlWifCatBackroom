import Head from 'next/head'
import styled from 'styled-components'
import { useEffect, useMemo, useState } from 'react'
import { useMobile } from '@/hooks/useMobile'
import { Modal } from '@/components/Modal'
import { useModal } from '@/hooks/useModal'
import Image from 'next/image'

export default function Home() {
	const { isMobile } = useMobile()
	const [modalTitle, setModalTitle] = useState('')
	const modalDescription = useMemo(() => 'COMING SOON', [])
	const { isOpen, openModal, closeModal } = useModal()

	useEffect(() => {
		document.title = 'Girlwifcat'
	}, [])

	const handleClick = (title: string) => {
		setModalTitle(title)
		openModal()
	}

	return (
		<>
			<Head>
				<meta
					name='description'
					content='Exploring the hyperfinancialization of crypto assets'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Container isMobile={isMobile}>
				<ImageContainer isMobile={isMobile}>
					<Image
						src='/images/girl.svg'
						alt='Girl'
						height={129.6}
						width={108.8}
					/>
					<Image
						src='/images/cat.svg'
						alt='Cat'
						height={129.6}
						width={108.8}
					/>
				</ImageContainer>
				<TitleLogo isMobile={isMobile}>Girlwifcat</TitleLogo>
				<List isMobile={isMobile}>
					<ListItem
						onClick={() => handleClick('COMPENDIUM')}
					>{`> COMPENDIUM`}</ListItem>
					<ListItem
						onClick={() => handleClick('CHATROOM')}
					>{`> CHATROOM`}</ListItem>
					<ListItem
						onClick={() => handleClick('CHATLOGS')}
					>{`> CHATLOGS`}</ListItem>
					<ListItem
						onClick={() => handleClick('SOCIALS')}
					>{`> SOCIALS`}</ListItem>
				</List>
				{isOpen && (
					<Modal
						title={modalTitle}
						description={modalDescription}
						closeModal={closeModal}
					/>
				)}
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
const TitleLogo = styled.div<{ isMobile?: boolean }>`
	font-size: ${({ isMobile }) => (isMobile ? '2.5rem' : '3rem')};
	font-family: 'Aexir', sans-serif;
`

const List = styled.div<{ isMobile: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: ${({ isMobile }) => (isMobile ? 'center' : 'flex-start')};
	margin-top: 2rem;

	& > div {
		font-size: ${({ isMobile }) => (isMobile ? '1rem' : '1.5rem')};
	}
`

const ListItem = styled.div`
	margin: 0.5rem 0;
	font-family: 'Helvetica', sans-serif;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`
const ImageContainer = styled.div<{ isMobile: boolean }>`
	width: ${({ isMobile }) => (isMobile ? '100%' : '30%')};
	height: auto;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	margin: ${({ isMobile }) => (isMobile ? '1rem 0' : '1rem 0')};

	img {
		width: 100%;
		height: auto;
	}
`
