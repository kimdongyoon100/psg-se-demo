# PSG-SE Audio Demo

Live demo: https://kimdongyoon100.github.io/psg-se-demo/

PSG-SE audio is **Joint Layer-only epoch 100**, not the previous frozen I2 w/o Gate model.

## Selected examples

| Dataset | Joint seed | Competitor seed | IDs | SNR (dB) |
|---|---:|---:|---|---|
| DNS1 With-Reverb | 34 | 34 | dns1_0050, dns1_0112, dns1_0169 | 1, 3, 6 |
| Simulated LibriTTS | 1 | 34 | utt_4797, utt_955, utt_3235 | -5, -5, 9 |

Simulated Example 3 is user-selected utt_3235 (9 dB), corresponding to local listening candidate 04. All nine audio conditions and spectrograms use this same utterance. The other five examples are unchanged. This is a post-hoc illustrative choice, not a standardized perceptual ranking.

These are post-hoc illustrative examples selected because Joint ECAPA SpkSim and UTMOS exceed all six displayed competitors, with low SNR prioritized. They are not a random sample, aggregate performance evidence, or a controlled matched-seed LibriTTS comparison. No listening validation has been performed. Dry clean/noisy are excluded from model ranking.

Display order: Noisy, CleanMel, PGUSE, FlowSE, SenSE, PASE-100, StuPASE, PSG-SE, Dry Clean Reference.

Enhanced audio is matched to the noisy waveform peak; noisy and dry clean remain unchanged. Spectrograms use the same fixed -80 to 0 dB scale. See manifest.json, selection_audit.json and noisy_peak_audit.json for provenance. Only ECAPA/UTMOS selection scores are stored in the new manifest; scores are not displayed by the page.

## Rebuild locally

All six examples use display-only scaling: within each example, the clean reference peak is first matched to the noisy peak, then all nine visualization signals receive the same gain (1 / noisy peak). The color limits remain -80 to 0 dB for every panel. Gain varies between examples, not between enhancement models within an example. No audio file or metric is changed. The applied gain is recorded in the manifest and noted visibly on the page. These are peak-referenced visualizations, not absolute-amplitude comparisons across examples.

`/home/hyuns/miniconda3/envs/kdy/bin/python build_joint_demo.py`

Previous assets are retained for recovery but are not referenced by the current manifest. The new files are under assets_joint_layer100/. Publication checkout: /home/hyuns/psg-se-demo.
