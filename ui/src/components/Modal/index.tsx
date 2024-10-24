import React from 'react'
import styled from 'styled-components'
import { Close } from '@styled-icons/ionicons-sharp/Close'

interface ModalProps {
	title: string
	description: string
	closeModal: () => void
}

export const Modal: React.FC<ModalProps> = ({
	title,
	description,
	closeModal,
}) => {
	return (
		<ModalOverlay>
			<ModalContent>
				<ModalHeader>
					<ModalTitle>{title}</ModalTitle>
					<CloseIcon onClick={closeModal} />
				</ModalHeader>
				<ModalBody>
					<ModalDescription>{description}</ModalDescription>
				</ModalBody>
				<ModalFooter>
					<Button onClick={closeModal}>CLOSE</Button>
				</ModalFooter>
			</ModalContent>
		</ModalOverlay>
	)
}

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
`

const ModalContent = styled.div`
	background: white;
	width: 100%;
	height: 100vh; /* Take up the entire height if it is mobile */
`

const ModalHeader = styled.div`
	display: flex;
	padding: 1rem;
	justify-content: space-between;
	align-items: center;
`

const ModalTitle = styled.h2`
	margin: 0;
	font-family: 'Aexir', sans-serif;
	font-size: 2rem;
`

const ModalBody = styled.div`
	margin: 1rem;
	margin-bottom: 1rem;
`

const ModalDescription = styled.p`
	font-size: 1rem;
	text-align: left;

	font-family: 'Helvetica', sans-serif;
`

const ModalFooter = styled.div`
	display: flex;
	margin: 1rem;
`

const Button = styled.button`
	padding: 1rem 2rem;
	border: none;
	background: #ff0000;
	color: white;
	cursor: pointer;
	text-transform: uppercase;
	font-size: 1.5rem;
	font-weight: 600;
	width: 100%;
`
const CloseIcon = styled(Close)`
	width: 36px;
	height: 36px;
	cursor: pointer;
`
