# PSG-SE Audio Demo

Live demo: https://kimdongyoon100.github.io/psg-se-demo/

Three DNS1 With-Reverb and three LibriTTS test-clean simulated examples, each with nine audio conditions. The page and plot margins use a white background. Spectrograms retain the same magma color map and fixed -80 to 0 dB scale.

## Selection

These are deliberately selected qualitative examples, not a random sample or aggregate evaluation.

- DNS1: SNR <= 5 dB; noisy DNSMOS OVRL <= 2.0; relative spectral occupancy >= 35%; absolute occupancy >= 35%.
- LibriTTS: SNR <= 0 dB; noisy DNSMOS OVRL <= 2.0; relative spectral occupancy >= 50%; absolute occupancy >= 35%.
- Relative occupancy is the fraction of noisy STFT bins within 40 dB of its maximum. Absolute occupancy is the fraction above -60 dBFS. STFT uses 512 samples and a 128-sample hop. These are visual density proxies, not direct noise measurements.
- Among eligible samples, select the three smallest mean absolute PSG-SE versus StuPASE differences in DNSMOS OVRL and UTMOS. No requirement that PSG-SE outperform StuPASE is imposed.
- All low-SNR candidate scores, thresholds and eligibility decisions are in `selection_audit.json`. Dense noisy spectrograms were also visually checked.

| Dataset | ID | SNR (dB) | Absolute DNSMOS OVRL difference | Absolute UTMOS difference |
|---|---|---:|---:|---:|
| DNS1 With-Reverb | dns1_0268 | 0 | 0.0097 | 0.0068 |
| DNS1 With-Reverb | dns1_0125 | 3 | 0.0518 | 0.0602 |
| DNS1 With-Reverb | dns1_0175 | 4 | 0.0930 | 0.2624 |
| LibriTTS test-clean | utt_4655 | -2 | 0.0063 | 0.0243 |
| LibriTTS test-clean | utt_212 | -5 | 0.0123 | 0.0483 |
| LibriTTS test-clean | utt_1706 | 0 | 0.0594 | 0.0190 |

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
