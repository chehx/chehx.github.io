---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am pursuing my Ph.D. in Computer Science and Engineering at [The Hong Kong University of Science and Technology](https://hkust.edu.hk) (HKUST). My primary research interests lie in computer vision, medical image analysis, and trustworthy artificial intelligence.

Prior to joining HKUST, I graduated from [Northwestern Polytechnical University](https://en.nwpu.edu.cn) (NWPU) with honor, and obtained a Bachelor’s degree in Software Engineering from the School of Software and Microelectronics.
Throughout my undergraduate studies, I was honored to receive several prestigious awards and recognitions, including the China National Scholarship.

<!-- Honestly, I have chance to work with some great researchers as Prof.Feiping Nie, Prof. Xuelong Li and Prof. Wei Zheng in the field of machine learning. -->

<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# 🔥 News
- *2024.08*: &nbsp;🎉🎉 Our paper got accepted by IEEE Transactions on Image Processing and will be published soon!
- *2024.05*: &nbsp;🎉🎉 Our paper got accepted by MICCAI 2024, see you in Marrakesh!
- *2024.01*: &nbsp;🎉🎉 Our paper got accepted by Patterns and will be published soon!
- *2023.12*: &nbsp;🎉🎉 Our paper got accepted by AAAI 2024, see you in Vancouver!
- *2023.11*: &nbsp;🎉🎉 Our paper got accepted by Nature Medicine and will be published soon!
- *2023.06*: &nbsp;🎉🎉 I successfully passed my PhD qualifying examination, thanks to my advisor and all the committee members!
- *2023.05*: &nbsp;🎉🎉 Our two papers got accepted by MICCAI 2023 (one is early accepted), see you in Vancouver!
- *2023.03*: &nbsp;🎉🎉 Our paper got accepted by CVPR 2023, see you in Vancouver!
- *2023.02*: &nbsp;🎉🎉 Our paper was shortlisted by [CSE Research and Technology Forum](https://cse.hkust.edu.hk/event/RTF2023/), happy to be a part of this great event!
- *2022.07*: &nbsp;🎉🎉 Glad to be selected for [MICCAI Travel Award](https://conferences.miccai.org/2022/en/MICCAI-2022-STUDENT-TRAVEL-AWARDS.html), thanks for the support!
- *2022.05*: &nbsp;🎉🎉 Our paper got early accepted by MICCAI 2022, see you in Singapore!
- *2022.03*: &nbsp;🎉🎉 Honored to be the person in charge of 2022/23 [Technology Start-up Support Scheme for Universities](https://www.itf.gov.hk/en/project-search/project-profile/index.html?ReferenceNo=TSSSU/HKUST/22/03) (TSSSU).
Thank you, Innovation and Technology Commission!
- *2021.10*: &nbsp;🎉🎉 Our paper got accepted by IEEE JSAC!

# 📝 Selected Publications | [[Full List](https://scholar.google.com/citations?user=rCvK7tcAAAAJ&hl)] *(† indicates co/student-first author)*
 
<!-- 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Residual Learning for Image Recognition](https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf)

**Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div> -->
<!-- 
- **Haoxuan Che**<sup>†</sup>, Haibo Jin<sup>†</sup>, Yi, Lin, Hao Chen. FedGMRG: Federated Learning for Generalizable Medical Report Generation. 
*Pre-Print*, 2023. 
| [Paper]
- **Haoxuan Che**<sup>†</sup>, Yifei Wu<sup>†</sup>, Haibo Jin, Yong Xia, Hao Chen. FedNDG: Federated Novel Domain Generation Towards Generalizable Medical Image Analysis. 
*Pre-Print*, 2023. 
| [Paper] -->
- Haibo Jin, **Haoxuan Che**<sup>†</sup>, Hao Chen. Rethinking Self-training for Semi-supervised Landmark Detection: A Selection-free Approach. 
*Aceepted by IEEE Transactions on Image Processing*, 2024. 
(IF:10.8)
| [[Paper](https://arxiv.org/abs/2404.04556)] [[code]()]
- Bo Qian, Hao Chen, Xiangning Wang, Zhouyu Guan, Tingyao Li, Yilan Wu, Yang Wen, **Haoxuan Che**, ..., Carol Y. Cheung, Weiping Jia, Huating Li, Yih Chung Tham, Tien Yin Wong, Bin Sheng. DRAC 2022: A public benchmark for diabetic retinopathy analysis on ultra-wide optical coherence tomography angiography images.
*Patterns*, 2024. 
(IF: 6.5) 
| [[Paper](https://www.cell.com/patterns/pdf/S2666-3899(24)00020-5.pdf)] [[Dataset](https://drac22.grand-challenge.org)]
- Ling Dai, Bin Sheng, ..., **Haoxuan Che**, Hao Chen, ..., Dinggang Shen, Xiaokang Yang, Minyi Guo, Cuntai Zhang, Carol Y. Cheung, Gavin Siew Wei Tan, Yih-Chung Tham, Ching-Yu Cheng, Huating Li, Tien Yin Wong, Weiping Jia. A deep learning system for predicting time to progression of diabetic retinopathy. 
*Nature Medicine*, 2024. 
(IF: 87.244)
| [[Paper](https://doi.org/10.1038/s41591-023-02742-5)] [[Code](https://github.com/drpredict/DeepDR_Plus)]
- Haibo Jin, **Haoxuan Che**, Yi Lin, Hao Chen. PromptMRG: Diagnosis-Driven Prompts for Medical Report Generation. 
*The AAAI Conference on Artificial Intelligence* (**AAAI**), 2024. 
(Acceptance rate: 23.75%)
| [[Paper](https://arxiv.org/abs/2308.12604)] [[Code](https://github.com/jhb86253817/PromptMRG)]
- Haibo Jin, **Haoxuan Che**, Hao Chen. Unsupervised Domain Adaptation for Anatomical Landmark Detection. 
*International Conference on Medical Image Computing and Computer Assisted Intervention* (**MICCAI**), 2023. 
(Acceptance rate: 32.0%)
| [[Paper](https://arxiv.org/abs/2308.13286)] [[Code](https://github.com/jhb86253817/uda_med_landmark)]
- **Haoxuan Che**, Yuhan Cheng, Haibo Jin, Hao Chen. Towards Generalizable Diabetic Retinopathy Grading in Unseen Domains. 
*International Conference on Medical Image Computing and Computer Assisted Intervention* (**MICCAI**), 2023. 
(Early accepted with rate of top 14%)
| [[Paper](https://arxiv.org/abs/2307.04378)] [[Code](https://github.com/chehx/DGDR)]
- **Haoxuan Che**, Siyu Chen, Hao Chen. Image Quality-aware Diagnosis via Meta-knowledge Co-embedding. 
*IEEE/CVF Conference on Computer Vision and Pattern Recognition* (**CVPR**), 2023.
(Acceptance rate: 25.78%)
| [[Paper](https://arxiv.org/abs/2303.15038)] [[Code](https://github.com/chehx/MKCNet)]
- **Haoxuan Che**, Haibo Jin, Hao Chen. Learning Robust Representation for Joint Grading of Ophthalmic Diseases via Adaptive Curriculum and Feature Disentanglement. 
*International Conference on Medical Image Computing and Computer Assisted Intervention* (**MICCAI**), 2022. 
(Early accepted with rate of top 13.6%, MICCAI Travel Award)
| [[Paper](https://arxiv.org/abs/2207.04183)] [Code]
- Peng Sun, **Haoxuan Che**<sup>†</sup>, Zhibo Wang, Yuwei Wang, Tao Wang, Liantao Wu, and Huajie Shao. Pain-FL: Personalized Privacy-Preserving Incentive for Federated Learning. 
*IEEE Journal on Selected Areas in Communications* (**JSAC**), vol. 39, no. 12, pp. 3805-3820, 2021. 
(IF: 13.081)
| [[Paper](https://ieeexplore.ieee.org/abstract/document/9565851)]
- Feiping Nie, **Haoxuan Che**<sup>†</sup>, Hong Wang, Rong Wang, Zhongwei Yu, Xuelong Li. A kind of fast approximate k nearest neighbor method based on tree strategy with balance K mean cluster. 
*CN Patent No. CN110070121A*. Date of application: Apr. 15th, 2019, Date of granted: Aug. 10th, 2021, Date of expiration: Apr. 15th, 2039.
| [[Google Patent](https://patents.google.com/patent/CN110070121A/zh?oq=CN110070121A)]
- Yuandong Li, **Haoxuan Che**<sup>†</sup>, Xinyu Hou. Task-pricing Program of "Photo Shoot Proﬁt" Based on Game Theory. 
*Chinese Journal of Engineering Mathematics*, vol. 34, supp. 1, pp. 125-130, 2017.

# 🎖 Selected Honors and Awards
- The Honor of Outstanding Graduate at Northwestern Polytechnical University, Top 5% (*2019.06*)
- The China National Scholarship, Top 2% (*2016-2017*, *2017-2018*)
- The First Prize in the National College Students Mathematics Modeling Competition, Top 0.88% (*2017.11*)
- The Excellent Paper Award for the National College Students Mathematics Modeling Competition, 12/33062 (*2017.11*)
- The First Prize and Application Innovation Award in the ASC17 Student Supercomputer Challenge, 1/230 (*2017.04*)

# 📖 Educations
- *2021.08 - 2023.12 (present)*, Ph.D. Candidate, School of Engineering, Hong Kong University of Science and Technology, Hong Kong SAR. 
- *2015.09 - 2019.06*, Undergraduate, School of Software and Microelectronics, Northwestern Polytechnical University, Xi'an.
- *2012.09 - 2015.06*, Studet, Xi'an Qujiang No.1 Middle School, Xi'an.

# 💻 Professional Service
- Conference Program Committee Member: 
  - AAAI Conference on Artificial Intelligence (AAAI) 2023, 2024
  - IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2024
  - International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI) 2024
- Journal Reviewer:
  - IEEE Transactions on Neural Networks and Learning Systems (TNNLS)
  - IEEE Transactions on Image Processing (TIP)
  - IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)
  - IEEE Transactions on Medical Imaging (TMI)
- Competition and Workshop Organization:
  - [DRAC 2022: Diabetic Retinopathy Analysis Challenge.](https://drac22.grand-challenge.org) (within MICCAI 22)

# 📚 Teaching Experience
## Course 
- COMP 3321 Fundamentals of Artificial Intelligence, Teaching Assisstant, 2023-2024 Fall Semester.
- COMP 4421 Image Processing, Teaching Assisstant, 2022-2023 Fall Semester.
- COMP 4451 Game Programming, Teaching Assisstant, 2021-2022 Spring Semester.

## Mentee
- *2023.10 - 2024.08* (present), Kai Syun Hou (UG @ HKUST, next position: M.Ph. in HKUST)
- *2023.02 - 2024.05*, Yifei Wu (M.S. @ NWPU)
- *2022.06 - 2024.05*, Yuhan Cheng (UG @ HKUST)
- *2023.07 - 2024.02*, Lingqi Zeng (UG @ HKUST)
- *2023.06 - 2024.02*, Hoi-Tin Wong (UG @ HKUST)
- *2021.11 - 2023.01*, Siyu Chen (UG @ HKUST, next position: Ph.D. in HKUST)

# 💬 Grants
- *2022.03 - 2024.03*, [Technology Start-up Support Scheme for Universities](https://www.itf.gov.hk/en/project-search/project-profile/index.html?ReferenceNo=TSSSU/HKUST/22/03), The Innovation and Technology Commission (ITC) of the Hong Kong SAR.

<!-- #  💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->