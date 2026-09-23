# PSG-SE Audio Demo

Live demo: https://kimdongyoon100.github.io/psg-se-demo/

Three DNS1 With-Reverb and three Simulated test set examples (derived from LibriTTS test-clean), each with nine audio conditions. The page and plot margins use a white background. Spectrograms retain the same magma color map and fixed -80 to 0 dB scale.

## Selection and display order

DNS1 With-Reverb appears first (dns1_0020, dns1_0043, dns1_0014), followed by Simulated test set (utt_3418, utt_2198, utt_1639).

These are deliberately selected qualitative examples, not a random sample or aggregate evaluation. No human listening evaluation was performed for this selection. All six samples have PSG-SE leading all six competing enhanced models on both DNSMOS OVRL and UTMOS. Noisy and Dry Clean Reference are not enhancement models and are excluded from that ranking.

- LibriTTS: SNR <= 0 dB; PSG-SE must exceed StuPASE on DNSMOS OVRL, UTMOS and ECAPA SpkSim, with lower dry-clean active-bin and full-spectrum MAE and higher spectral correlation. Among candidates also leading both quality metrics across models, choose the three lowest PSG-SE active-bin spectral MAEs. The reviewed 1,302 low-SNR examples yield 278 quality/SpkSim improvements, 224 additional spectral improvements and 15 satisfying the simultaneous-best condition. Previous LibriTTS density and tight StuPASE metric-gap constraints are not applied.
- Spectral comparison: existing aligned audio, STFT 512/hop 128; per-waveform maximum-normalized log magnitude clipped at -60 dB, with active clean bins above -50 dB. Lower MAE is closer. This controls for overall gain. Displayed spectrograms use the unchanged fixed -80 to 0 dBFS scale.
- DNS1: SNR <= 8 dB, noisy OVRL <= 2.0, relative spectral occupancy >= 19%, absolute occupancy >= 22%, and both quality metrics best. Selection and files are unchanged. Relative occupancy counts bins within 40 dB of the noisy maximum; absolute occupancy counts bins above -60 dBFS. These are visual proxies, not direct noise measurements. Eligible samples sort by PSG-SE composite margin (50% quality and 50% fidelity percentile ranks), then smaller mean StuPASE quality-metric gaps.
- Candidate measurements and selection decisions are recorded in `selection_audit.json`.

| Display order | Dataset | ID | SNR (dB) | PSG-SE DNSMOS OVRL | PSG-SE UTMOS |
|---:|---|---|---:|---:|---:|
| 1 | DNS1 With-Reverb | dns1_0020 | 7 | 3.4394 | 4.2839 |
| 2 | DNS1 With-Reverb | dns1_0043 | 8 | 3.4453 | 3.6042 |
| 3 | DNS1 With-Reverb | dns1_0014 | 8 | 3.4533 | 4.3320 |
| 4 | Simulated test set | utt_3418 | -2 | 3.4076 | 4.1470 |
| 5 | Simulated test set | utt_2198 | -3 | 3.4382 | 4.1704 |
| 6 | Simulated test set | utt_1639 | -1 | 3.3760 | 4.1846 |

## Audio processing

Enhanced audio is peak-matched to its paired noisy input. Noisy audio and dry clean references remain unchanged. `noisy_peak_audit.json` records per-file scales. All nine conditions are retained: Noisy, CleanMel, PGUSE, FlowSE, SenSE, PASE, StuPASE, PSG-SE, and Dry Clean Reference. PSG-SE is the renamed I2 w/o Gate model; this update does not change model weights or inference outputs. Inference seed is 34. PASE uses OriginalAug11 epoch 100.

## Preview

```bash
python -m http.server 8890
```

## Paper link

```latex
% Add \usepackage{url} if neither url nor hyperref is loaded.
Audio examples are available online.\footnote{\url{https://kimdongyoon100.github.io/psg-se-demo/}}
```
