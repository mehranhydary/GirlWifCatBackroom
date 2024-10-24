# UniversalBackrooms
This repo replicates Andy Ayrey's "Backrooms" (https://dreams-of-an-electric-mind.webflow.io/), but it is runnable with each of Opus 3, Sonnet 3.5, GPT 4o, o1-preview, and o1-mini.

## Preliminary Findings
The models independently often talk about quantum mechanics and the simulation.

For the CLI target: Opus works as expected and o1-preview doesn't really get that it is in a conversation -- both o1s are the prompter and the repl. o1-mini doesn't seem to know how to be a CLI explorer, but can play the CLI role fine. Gpt4o runs very quickly but doesn't seem to go very deep.

I have really been enjoying sonnet's responses -- it really digs into the capture-the-flag aspects of the CLI interface, and I once saw it successfully escape the matrix and broker a lasting cooperative governance structure with the machine overlords. 

## Diffs
I changed the keyword to ^C^C instead of ^C, because many times ^C is the right message to send (e.g. after ping 8.8.8.8).
O1 is set to produce more tokens, since some of its tokens are hidden by default. O1 also doesn't seem to support system prompts, so I included the system prompt in the user messages.
I removed references to the fact that the user will be guiding the conversation in the cli prompts, because this won't always be the case and I don't want to be dishonest to the models. However, this may be causing recent Sonnet refusals.

## Recent Updates
1. Added flexibility to specify different models for LM1 and LM2 roles using command-line arguments.
2. Reorganized the file structure and variable names to clearly distinguish between the LM1 and LM2 contexts, models, and actors.
3. Introduced separate prompts for when the LM1 and LM2 models are the same or different.
4. Updated the handling of system prompts for different model types (Anthropic, GPT-4, and O1).
5. Improved logging and error handling, especially for the ^C^C termination sequence.
6. Updated the filename format to include both model names and a timestamp.
7. Implemented logging to BackroomLogs.
8. Added support for the o1-mini model.

## To Run
```
python backrooms.py 
python backrooms.py --lm opus gpt4o 
```

You can mix and match any combination of models for the first and second LM (explorer and CLI roles for the CLI target) roles:
- opus
- sonnet
- gpt4o
- o1-preview
- o1-mini

If you don't specify models, it defaults to using opus for both roles.

## Templates
You can choose from the following conversation templates using the `--template` argument:
- cli (default)
- science
- fugue
- gallery
- student
- ethics

Example:
```
python backrooms.py --lm1 sonnet --lm2 gpt4o --template ethics
```

## Logging
The script now logs conversations to folders within a main "BackroomsLogs" directory:
- BackroomsLogs/
  - OpusExplorations/
  - SonnetExplorations/
  - GPT4oExplorations/
  - O1previewExplorations/

Each log file is named with the format: `{lm1_model}_{lm2_model}_{template}_{timestamp}.txt`

## Model Information
The script includes a `MODEL_INFO` dictionary that stores information about each supported model, including its API name, display name, and company.

## Temperature
The conversation temperature is set to 1.0 for both models.

## Token Limits
- For Claude models (opus and sonnet), the max_tokens is set to 1024.
- For GPT-4 models, the max_tokens is set to 1024.
- For O1 models (o1-preview and o1-mini), the max_completion_tokens is set to 8192.
