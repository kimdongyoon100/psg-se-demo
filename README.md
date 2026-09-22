# DARC-SE Audio Demo

This static page presents DNS1 With-Reverb examples 1, 6, and 8 from the
original eight-example ranking, together with six
selected LibriTTS test-clean simulated examples at SNR ≤ 5 dB. It includes
audio and fixed-scale spectrograms for nine conditions.

## Selection rule

Selection is not based on speaker similarity alone. For each utterance, the
enhanced systems are ranked on:

- DNSMOS OVRL and UTMOS for quality
- ECAPA, SpeechBERTScore, LPS, and inverse WER for fidelity

The quality and fidelity percentile means receive equal weight. Examples rank
by DARC-SE's composite advantage over the strongest comparison system, with a
small penalty for disagreement between its quality and fidelity scores. These examples are cherry-picked and must not be used in place of aggregate evaluation.

PASE uses `I00_B_PASE OriginalAug11 epoch 100`, inference seed 34.

For LibriTTS, a sample is eligible only when DARC-SE exceeds every enhanced
comparison system in both DNSMOS OVRL and ECAPA SpkSim, while also satisfying
OVRL ≥ 3.0 and ECAPA ≥ 0.8. The six examples are ranked by the two improvement
margins together with DARC-SE's absolute OVRL and ECAPA values.

All enhanced-system audio copied into the demo is explicitly peak-matched to
its paired noisy waveform. The noisy audio is unchanged, and the dry clean
reference remains an unscaled reference. The exact per-file scale audit is in
`noisy_peak_audit.json`.

## Demo

https://kimdongyoon100.github.io/darc-se-demo/

## Local preview

```bash
python -m http.server 8890
```

Open `http://127.0.0.1:8890/`.

## Paper link

```latex
% Add \usepackage{url} in the preamble if needed.
Audio examples are available online.\footnote{\url{https://kimdongyoon100.github.io/darc-se-demo/}}
```

## Fixed model order

1. Noisy
2. CleanMel-80
3. PGUSE
4. FlowSE
5. SenSE
6. PASE
7. StuPASE
8. DARC-SE (`I2 w/o Gate`)
9. Dry Clean Reference
