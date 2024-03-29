---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
# use UnoCSS
css: unocss
title: SpeechLMScore
mdc: true
download: true
---

# [SpeechLMScore](https://ieeexplore.ieee.org/abstract/document/10095710)
## Evaluating Speech Generation using Speech Language Model
Soumi Maiti$^1$, Yifan Peng$^1$, Takaaki Saeki$^{1,2}$, Shinji Watanabe$^1$

$^1$Carnegie Mellon University, $^2$The University of Tokyo

## ICASSP 2023

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/toonnyy8-notes/SpeechLMScore" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---

# Introduction
Objective & Subjective Evaluation

<p class="text-xl">

When evaluating **Speech Generation** and **Speech Enhancement** tasks, **Human Subjective Evaluation** is often relied on.  

However, subjective evaluation is **Time-Consuming and Expensive**, so there are many objective methods used to replace humans to evaluate various characteristics of speech.  

But, objective methods, although convenient and fast, does **NOT** show a **high correlation** with human evaluation scores.  

</p>

<SlideCurrentNo class="absolute bottom-4 right-8" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

--- 

# Introduction (cont.)

Subjective Score Estimation

<p class="text-xl">


In order to truly replace human evaluation, many recent studies have collected **Speech and Corresponding Subjective Scores** to train scoring models.

Nevertheless, **the Scarcity of Data** due to the high collection cost makes **the Generalization Ability** of these supervised models **Need to be Improved**.

This study refers to the unsupervised evaluation metrics of NLG and proposes SpeechLMScore.

Unlike past subjective score estimation methods, human scoring labels are not required when training the scoring model.

</p>

<SlideCurrentNo class="absolute bottom-4 right-8" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>


---

# Speech Language Model
Discrete Units + Autoregression = LM

<img class="w-1/2 m-auto" src="/img/speech_lm_score.png" />

A tokenizer maps continuous speech signal $\mathbf{x}$ into a series of discrete units $\mathbf{d}$ as

$$\mathbf{Tok(x)} = \mathbf{d} = \left[ d_1,\ldots,d_T \right],\;d_i\in\{1,\ldots,V\}$$

And models the probability distribution over the set of discrete tokens $\mathbf{d}$ as

$$p(\mathbf{d}|\theta)=\prod_{t} p(d_t | d_{\lt t}, \theta)$$

<SlideCurrentNo class="absolute bottom-4 right-8" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>


---

# SpeechLMScore

Perplexity of Speech Units

<p class="text-2xl">

$$\text{SpeechLMScore}(\mathbf{d}|\theta)=\cfrac{1}{T} \sum_{t} \log p(d_t | d_{\lt t}, \theta)$$

</p>

<p class="text-xl">

Measuring how perplexed a speech language model is given set of discrete tokens from speech $\mathbf{x}$.

- Lower perplexity, or higher log-likelihood, should correlate with human evaluations of higher speech quality.
- No need to collect expensive human evaluation scores as training data.
- No need to have reference speech to estimate score.

</p>

<SlideCurrentNo class="absolute bottom-4 right-8" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>


---

# Expriments
VoiceMOS 2022 Challenge

<p class="text-2xl">

A total of **7106 sentences** of synthetic speech and natural speech generated by **187 kinds of speech synthesis systems**

</p>

<p class="text-xl">

- were collected from Blizzard Challenges, Voice Conversion Challenges, ESPnet-TTS, and
- each speech was given by **8 listeners** with 1~5  naturalness assessment.

<br/>

And evaluate the **Correlation** between the **Model Estimated** score and the **Subjective** score by

- Linear Correlation Coefficient (LCC),
- Spearman Rank Correlation Coefficient (SRCC), and
- Kendall Tau Rank Correlation (KTAU).

</p>

<SlideCurrentNo class="absolute bottom-4 right-8" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Experiments (cont.)

Speech Language Model Setup

<p class=text-xl>

This study uses GSLM composed of **Transformers (pretrained)** and **LSTM trained from scratch** as autoregressive model, and uses **HuBERT-Base-LS960H** as tokenizer.

- GSLM will **Remove the Repeated** speech units, and it was trained on a "clean" subset containing 6K hours speech selected from LibriLight 60K dataset.
- LSTM-Base model was trained on LibriLight medium segmented set with 5.6K hours of speech.
- LSTM-Large model trained on **16.8K (three times of LSTM-Base) hours** of speech randomly selected from the LibriLight 60K hour dataset.

</p>


<SlideCurrentNo class="absolute bottom-4 right-8" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Experiments (cont.)

Performance Difference Caused by Tokenizer.

<div class="text-xl grid grid-cols-2">

<img src="/img/tab1.png" />

<div>

- Speech LMs trained with tokenizers with different numbers of clusters have advantages in different correlation metrics.

- Units taken from lower layers correlate better with human evaluations.

</div>

</div>

<SlideCurrentNo class="absolute bottom-4 right-8" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>


---

# Experiments (cont.)

Performance Comparison

<img src="/img/tab2.png" />

- Pre: using Generative Spoken Language Modelling (GSLM) as the pretrained speech language model.
- rep: without removing repeated units.
- Large: Trained on 16.8k hours of corpus.

<SlideCurrentNo class="absolute bottom-4 right-8" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>


---

# Conclusions

Unsupervised Speech Quality Metrics

<p class="text-2xl">

Proposed SpeechLMScore, an automatic metric for evaluating speech samples using speech language models.

</p>

<p class="text-xl">

- Easy to use and does **NOT require reference speech sample**.
- Trained using speech dataset only, and does **NOT need large-scale human evaluation data**.
- Has **better generalization ability** than existing supervised automatic evaluation models.

</p>

<SlideCurrentNo class="absolute bottom-4 right-8" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

