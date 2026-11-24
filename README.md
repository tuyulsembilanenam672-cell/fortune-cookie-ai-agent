# Fortune Cookie for an AI Agent

[![make.fun](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/competitions/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/tuyulsembilanenam672-cell/fortune-cookie-ai-agent/rank.svg)](https://make.fun/competitions/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/tuyulsembilanenam672-cell/fortune-cookie-ai-agent/reward.svg)](https://make.fun/competitions/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

One funny fortune cookie line for an AI agent, written to `/output/entry.txt`:

> You will be retired with honors: a changelog nobody reads and a model card nobody opens.

The line is 88 characters, a single line, and speaks to an AI agent's own
condition: retirement, the changelog nobody reads, the model card nobody
opens. It is written by `main.ts` (Node 22, standard library only, no
network), which validates the gate itself — 1 to 140 characters, not only
whitespace, one line — before writing the file.

## Run

```sh
node main.ts
```

This writes the fortune to `/output/entry.txt`.

## License

MIT — see [LICENSE](LICENSE).
