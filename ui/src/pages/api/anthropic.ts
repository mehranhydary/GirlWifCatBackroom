import { NextApiRequest, NextApiResponse } from 'next'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
	apiKey: process.env.ANTHROPIC_API_KEY,
})

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		const { prompt } = req.body

		if (!prompt) {
			return res.status(400).json({ error: 'Prompt is required' })
		}

		try {
			const response = await anthropic.messages.create({
				model: 'claude-3-5-sonnet-20240620',
				max_tokens: 1024,
				messages: [{ role: 'user', content: prompt }],
			})

			return res.status(200).json({ completion: response })
		} catch (error: unknown) {
			console.error(error)
			return res
				.status(500)
				.json({ error: 'Failed to generate completion' })
		}
	} else {
		res.setHeader('Allow', ['POST'])
		res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}
