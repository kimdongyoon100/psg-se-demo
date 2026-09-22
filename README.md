# PSG-SE Audio Demo

Live demo: https://kimdongyoon100.github.io/psg-se-demo/

Three DNS1 With-Reverb and three LibriTTS test-clean simulated examples, each with nine audio conditions. The page and plot margins use a white background. Spectrograms retain the same magma color map and fixed -80 to 0 dB scale.

## Selection

These are deliberately selected qualitative examples, not a random sample or aggregate evaluation. No human listening evaluation was performed for this selection.

- DNS1: PSG-SE must have the highest DNSMOS OVRL AND the highest UTMOS among all seven enhanced systems. Noisy and Dry Clean Reference are excluded from the model ranking. SNR <= 8 dB (previously 5); noisy OVRL <= 2.0; relative spectral occupancy >= 19% (previously 35%); absolute occupancy >= 22% (previously 35%). Three examples satisfy these criteria.
- LibriTTS remains unchanged: SNR <= 0 dB; noisy OVRL <= 2.0; relative occupancy >= 50%; absolute occupancy >= 35%; PSG-SE versus StuPASE differences <= 0.061 in each quality metric. The three examples rank first on the selection composite, but are NOT all first on DNSMOS and UTMOS individually. Only utt_4655 satisfies that stricter condition; completing a three-example simultaneous-best LibriTTS selection requires a similarity-constraint change.
- Relative occupancy is the fraction of noisy STFT bins within 40 dB of its maximum. Absolute occupancy is the fraction above -60 dBFS. STFT uses 512 samples and a 128-sample hop. These are visual density proxies, not direct noise measurements.
- Within eligible samples, prefer the largest PSG-SE composite margin over the strongest competing enhanced system, then smaller mean StuPASE metric gaps. The composite gives 50% weight to quality (DNSMOS OVRL and UTMOS) and 50% to fidelity (ECAPA, SpeechBERTScore, LPS and inverse WER), using within-utterance percentile ranks across seven enhanced systems. For DNS1, the two individual quality scores must both lead before this sorting is applied.
- All candidate scores and eligibility decisions are in `selection_audit.json`.

| Dataset | ID | SNR (dB) | Absolute DNSMOS gap to StuPASE | Absolute UTMOS gap to StuPASE | Both quality metrics best |
|---|---|---:|---:|---:|---|
| DNS1 With-Reverb | dns1_0020 | 7 | 0.0716 | 0.0913 | True |
| DNS1 With-Reverb | dns1_0043 | 8 | 0.1385 | 0.0989 | True |
| DNS1 With-Reverb | dns1_0014 | 8 | 0.0529 | 0.1714 | True |
| LibriTTS test-clean | utt_4441 | -1 | 0.0539 | 0.0477 | False |
| LibriTTS test-clean | utt_4655 | -2 | 0.0063 | 0.0243 | True |
| LibriTTS test-clean | utt_4133 | -5 | 0.0474 | 0.0315 | False |

## Audio processing

Enhanced audio is peak-matched to its paired noisy input. Noisy audio and dry clean references remain unchanged. `noisy_peak_audit.json` records per-file scales. All nine conditions are retained: Noisy, CleanMel-80, PGUSE, FlowSE, SenSE, PASE, StuPASE, PSG-SE, and Dry Clean Reference. PSG-SE is the renamed I2 w/o Gate model; this update does not change model weights or inference outputs. Inference seed is 34. PASE uses OriginalAug11 epoch 100.

## Preview

```bash
python -m http.server 8890
```

## Paper link

```latex
% Add \usepackage{url} if neither url nor hyperref is loaded.
Audio examples are available online.\footnote{\url{https://kimdongyoon100.github.io/psg-se-demo/}}
```
