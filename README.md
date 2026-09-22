# PSG-SE Audio Demo

Live demo: https://kimdongyoon100.github.io/psg-se-demo/

Three DNS1 With-Reverb and three LibriTTS test-clean simulated examples, each with nine audio conditions. The page and plot margins use a white background. Spectrograms retain the same magma color map and fixed -80 to 0 dB scale.

## Selection

These are deliberately selected qualitative examples, not a random sample or aggregate evaluation.

- DNS1: SNR <= 5 dB; noisy DNSMOS OVRL <= 2.0; relative spectral occupancy >= 35%; absolute occupancy >= 35%.
- LibriTTS: SNR <= 0 dB; noisy DNSMOS OVRL <= 2.0; relative spectral occupancy >= 50%; absolute occupancy >= 35%.
- Relative occupancy is the fraction of noisy STFT bins within 40 dB of its maximum. Absolute occupancy is the fraction above -60 dBFS. STFT uses 512 samples and a 128-sample hop. These are visual density proxies, not direct noise measurements.
- Preserve the noisy-input criteria above. LibriTTS additionally requires absolute PSG-SE versus StuPASE differences <= 0.061 in each of DNSMOS OVRL and UTMOS. DNS1 retains its only three density-eligible candidates, including the existing 0.2624 UTMOS gap for dns1_0175.
- Prefer the largest PSG-SE composite margin over the strongest competing enhanced system. The composite gives 50% weight to quality (DNSMOS OVRL and UTMOS) and 50% to fidelity (ECAPA, SpeechBERTScore, LPS and inverse WER), using within-utterance percentile ranks across the seven enhanced systems. Ties use smaller mean metric differences. This is a heuristic for selecting promising listening examples; no human listening evaluation was performed for this selection.
- PSG-SE ranks first on this composite for all three selected LibriTTS examples. DNS1 composite ranks are 1, 2 and 2; superiority on every example or metric is not claimed.
- All low-SNR candidate scores, thresholds and eligibility decisions are in `selection_audit.json`. Dense noisy spectrograms were also visually checked.

| Dataset | ID | SNR (dB) | Absolute DNSMOS OVRL difference | Absolute UTMOS difference | PSG-SE composite rank |
|---|---|---:|---:|---:|---:|
| DNS1 With-Reverb | dns1_0268 | 0 | 0.0097 | 0.0068 | 1 |
| DNS1 With-Reverb | dns1_0125 | 3 | 0.0518 | 0.0602 | 2 |
| DNS1 With-Reverb | dns1_0175 | 4 | 0.0930 | 0.2624 | 2 |
| LibriTTS test-clean | utt_4441 | -1 | 0.0539 | 0.0477 | 1 |
| LibriTTS test-clean | utt_4655 | -2 | 0.0063 | 0.0243 | 1 |
| LibriTTS test-clean | utt_4133 | -5 | 0.0474 | 0.0315 | 1 |

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
