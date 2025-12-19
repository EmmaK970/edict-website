const projects = [
    {
        id: 1, wp: "WP1 - Measurement", location: "Zagreb, Croatia",
        title: "Mapping EDI Representation in European Clinical Trials",
        supervisors: ["Prof. Livia Puljak (Catholic University of Croatia)", "Prof. Damir Sapunar (University of Split School of Medicine)"],
        summary: "Measuring how EDI is planned and realized across European trials since 1993, combining quantitative mapping with case studies and PI interviews to deliver standardized indicators and training modules.",
        background: "Equity, diversity, and inclusion (EDI) are vital for valid, fair clinical trials, yet European studies still under-represent key groups (e.g., ethnic minorities, older adults, people with multimorbidity). Despite policy attention, trial teams lack practical, day-to-day guidance. Barriers include restrictive eligibility criteria, limited cultural competence, unconscious bias, weak recruitment infrastructures, and inconsistent reporting.",
        objectives: ["Quantify how EDI is reflected in inclusion/exclusion criteria and reported samples in European trials; assess temporal trends in 5-year intervals.", "Characterize planned EDI-relevant eligibility criteria; examine temporal trends and single- vs. multi-country patterns.", "Identify trials that successfully implemented EDI measures and extract concrete design, recruitment, and retention practices.", "Interview principal investigators to understand how EDI criteria are set, and to surface barriers, facilitators, and training needs.", "Review guidance and expectations on EDI, highlight gaps, and translate findings into practical recommendations."],
        studies: ["<strong>Study 1:</strong> Meta-research study of journal articles - Analyze inclusion/exclusion characteristics in European trials.", "<strong>Study 2:</strong> Meta-research study of trial registry - Analyze the EU Clinical Trials Register from 1993 to present.", "<strong>Study 3:</strong> Case studies of trials that successfully implemented EDI measures.", "<strong>Study 4:</strong> Qualitative study of principal investigators of recently registered trials.", "<strong>Study 5:</strong> Cross-sectional study of regulatory guidelines (EMA and NCAs)."],
        secondments: ["Two secondment placements in leading research institutions and industry partners"],
        degree: "Master's in health sciences, social sciences, psychology, public health, or related field.",
        academic: "At least 2.1 honours degree with strong Master's grades.",
        mobility: "Must not have resided in Croatia for more than 12 months in the 36 months prior to recruitment."
    },
    {
        id: 2, wp: "WP1 - Measurement", location: "Paris, France",
        title: "Advancing Measurement of Demographics and Treatment Effect Modifiers",
        supervisors: ["Prof. Viet-Thi Tran (Université Paris Cité)", "Dr. Karolin Krause (Université Paris Cité)", "Dr. Sanne Peters (UMC Utrecht)"],
        summary: "Establishing consensus on measuring demographic and psychosocial patient characteristics in clinical trials to enable detection of treatment effect heterogeneity in underserved populations.",
        background: "Randomized controlled trials often fail to represent underserved populations. Demographic characteristics are captured inconsistently, and psychosocial characteristics—health literacy, treatment preferences, financial constraints—are rarely measured. This creates gaps in understanding whether underserved populations respond differently to treatments.",
        objectives: ["Characterize how trials measure demographic and psychosocial patient characteristics.", "Identify and appraise measurement instruments for key characteristics.", "Describe how psychosocial characteristics distribute across underserved groups; explore associations with treatment engagement."],
        studies: ["<strong>Study 1:</strong> Systematic scoping review of case report forms from the CSDR database.", "<strong>Study 2:</strong> Clinimetric measure appraisal for priority characteristics.", "<strong>Study 3:</strong> Measure validation using the ComPaRe e-cohort."],
        secondments: ["Two secondment placements in leading research institutions and industry partners"],
        degree: "Master's in public health, epidemiology, psychology, or related field.",
        academic: "Quantitative research methods; measurement science training; good English.",
        mobility: "Must not have resided in France for more than 12 months in the 36 months prior to recruitment."
    },
    {
        id: 3, wp: "WP1 - Measurement", location: "Aberdeen, UK",
        title: "Evaluating Inclusivity in Clinical Trial Reporting",
        supervisors: ["Dr. Magdalena Rzewuska Diaz (University of Aberdeen)", "Prof. Shaun Treweek (University of Aberdeen and Uppsala University)"],
        summary: "Systematically identifying what inclusivity means in a trial context and developing tools and guidance for standardised inclusion measurement and reporting.",
        background: "While 'inclusive trials' are discussed freely in strategy documents, exactly what a trial has to look like to be called inclusive is unclear. This presents a practical barrier to trialists who want to design, run, analyse and report more inclusive trials.",
        objectives: ["Systematically identify current perspectives on what inclusivity means and how it is measured across jurisdictions.", "Explore what data trial teams should collect to evaluate inclusivity.", "Develop tools and guidance for standardised inclusion measurement and reporting."],
        studies: ["<strong>Study 1:</strong> Evidence synthesis - Systematic/scoping review of inclusivity definitions.", "<strong>Study 2:</strong> Qualitative study with key stakeholders.", "<strong>Study 3:</strong> Focused participatory workshops on measurement.", "<strong>Study 4:</strong> Creating tools and guidance for trial teams."],
        secondments: ["Two secondment placements in leading research institutions and industry partners"],
        degree: "Strong undergraduate degree in health sciences, psychology, public health, or related field.",
        academic: "At least 2.1 honours degree. Postgraduate study is an advantage.",
        mobility: "Must not have resided in the UK for more than 12 months in the 36 months prior to recruitment."
    },
    {
        id: 4, wp: "WP1 - Measurement", location: "Basel, Switzerland",
        title: "Developing a Core Outcome Set for EDI Implementation",
        supervisors: ["Dr. Benjamin Speich (University Hospital Basel)", "Prof. Matthias Briel (University Hospital Basel)"],
        summary: "Creating a standardized, consensus-based set of outcomes to measure and report EDI implementation in clinical trials through scoping review, survey, and international Delphi process.",
        background: "The implementation and evaluation of EDI practices in clinical trials remain inconsistent. A core outcome set—a standardized, consensus-based set of outcomes—would enable harmonized reporting, facilitate comparisons, and support evidence synthesis.",
        objectives: ["Systematically summarize existing outcomes used to measure EDI implementation.", "Identify additional potential outcomes and evaluate their advantages and challenges.", "Create a core outcome set through international Delphi process."],
        studies: ["<strong>Study 1:</strong> Scoping review to identify method papers on EDI outcomes.", "<strong>Study 2:</strong> Survey with EDI experts and trialists.", "<strong>Study 3:</strong> International Delphi Process with diverse stakeholders."],
        secondments: ["Two secondment placements in leading research institutions and industry partners"],
        degree: "Master's in health sciences, social sciences, psychology, public health, or related field.",
        academic: "Completed Master's degree with excellent grades.",
        mobility: "Must not have resided in Switzerland for more than 12 months in the 36 months prior to recruitment."
    },
    {
        id: 5, wp: "WP2 - Methodologies", location: "Paris, France",
        title: "Clinical Trial Emulation for Underrepresented Groups",
        supervisors: ["Prof. Isabelle Boutron (Université Paris Cité)", "Dr. Sally Yaacoub (Université Paris Cité)", "Dr. Neil O'Leary (University of Galway)"],
        summary: "Assessing the feasibility of generating evidence using target trial emulation for underrepresented populations and developing a framework to guide evidence generation.",
        background: "Clinical trials' narrow eligibility criteria limit generalizability. Target trial emulation is a structured framework to design observational studies that mimic RCTs while reducing bias, potentially generating reliable evidence for underrepresented populations.",
        objectives: ["Assess feasibility of generating evidence using target trial emulation for under-represented populations.", "Identify barriers and possible solutions.", "Develop a framework to guide evidence generation."],
        studies: ["<strong>Study 1:</strong> Assessment of feasibility using data sources like CONSTANCES and SNDS.", "<strong>Study 2:</strong> Identification of barriers through steering committee meetings.", "<strong>Study 3:</strong> Development of a consensus-based framework."],
        secondments: ["Two secondment placements in leading research institutions and industry partners"],
        degree: "Master's in public health (Epidemiology and Statistics specialization) or related field.",
        academic: "Strong academic record; good English.",
        mobility: "Must not have resided in France for more than 12 months in the 36 months prior to recruitment."
    },
    {
        id: 6, wp: "WP2 - Methodologies", location: "Galway, Ireland",
        title: "Leveraging Artificial Intelligence to Address Disparities",
        supervisors: ["Dr. Conor Judge (University of Galway)", "Prof. Declan Devane (University of Galway)"],
        summary: "Creating practical, ethics-aware AI tools that track recruitment patterns in real-time, flag emerging barriers, and give trial teams actionable guidance for inclusive recruitment.",
        background: "Persistent disparities in clinical trial enrollment limit evidence generalisability. Traditional monitoring is retrospective and static, meaning imbalances are noticed late. This project creates practical, ethics-aware AI tools for real-time recruitment monitoring.",
        objectives: ["Develop AI-based monitoring systems for real-time detection of recruitment biases.", "Design a harmonised data pipeline from EDC, CTMS, and IRT systems.", "Create explainable decision-support dashboards co-designed with patient partners.", "Prospectively pilot and evaluate in active studies with industry partner."],
        studies: ["<strong>Study 1:</strong> Problem formalisation, data mapping, and metric framework.", "<strong>Study 2:</strong> Algorithm development and retrospective validation.", "<strong>Study 3:</strong> Prospective pilot with mixed-methods evaluation.", "<strong>Study 4:</strong> Human-centered design and ethical/legal/social implications."],
        secondments: ["Two secondment placements in leading research institutions and industry partners"],
        degree: "Bachelor's (first/second-class honours) in computer science, data science, statistics, epidemiology, biostatistics, or health informatics. MSc strongly preferred.",
        academic: "Programming proficiency in Python or R.",
        mobility: "Must not have resided in Ireland for more than 12 months in the 36 months prior to recruitment."
    },
    {
        id: 7, wp: "WP2 - Methodologies", location: "Madrid, Spain",
        title: "Enhancing EDI in Informed Consent for Biological Samples and Data",
        supervisors: ["Dr. Alberto Borobia (Universidad Autónoma de Madrid)", "Dr. Irene García García (Universidad Autónoma de Madrid)"],
        summary: "Examining how participants understand information about biological samples and data use, analysing how comprehension varies across sociodemographic groups.",
        background: "Patient information sheets often provide vague or incomplete details about biological samples and data use, particularly disadvantaging underrepresented groups with lower health literacy, linguistic minorities, or socioeconomically disadvantaged participants.",
        objectives: ["Review regulations and guidance on biological samples and data use.", "Analyse patient information sheets for compliance and clarity.", "Explore participant perceptions across sociodemographic groups.", "Investigate decision-making factors for optional consent.", "Formulate recommendations for transparency and cultural competence."],
        studies: ["<strong>Study 1:</strong> Regulatory and policy review.", "<strong>Study 2:</strong> Content analysis of patient information sheets.", "<strong>Study 3:</strong> Participant survey and interviews (mixed-methods).", "<strong>Study 4:</strong> Choice and decision-making analysis.", "<strong>Study 5:</strong> Integration and recommendations."],
        secondments: ["Two secondment placements in leading research institutions and industry partners"],
        degree: "Master's in health sciences, social sciences, psychology, public health, bioethics, or related field.",
        academic: "At least 2.1 honours degree with strong Master's grades.",
        mobility: "Must not have resided in Spain for more than 12 months in the 36 months prior to recruitment."
    },
    {
        id: 8, wp: "WP2 - Methodologies", location: "Madrid, Spain",
        title: "Developing Inclusive Patient Advisory Groups for Clinical Trials",
        supervisors: ["Dr. Maria Cristina Murano (FIBHULP)", "Dr. Alberto Borobia (Universidad Autónoma de Madrid)"],
        summary: "Developing, implementing, and evaluating strategies for creating inclusive and culturally diverse patient advisory groups across Spanish hospitals.",
        background: "Patient advisory groups are essential for making clinical trials more relevant and inclusive, but evidence on how to establish diverse, representative groups remains limited.",
        objectives: ["Review current literature and national initiatives involving patients in clinical trials.", "Develop an action plan for inclusive patient advisory groups.", "Implement a pilot group at FIBHULP.", "Evaluate and make recommendations for future implementations."],
        studies: ["<strong>Study 1:</strong> Preparatory review of patient involvement experiences.", "<strong>Study 2:</strong> Action plan development with patient associations.", "<strong>Study 3:</strong> Implementation of pilot patient advisory group.", "<strong>Study 4:</strong> Evaluation and recommendations."],
        secondments: ["Two secondment placements in leading research institutions and industry partners"],
        degree: "Official Master's in health sciences, social sciences, psychology, public health, bioethics, or related field.",
        academic: "At least 2.1 honours degree with strong Master's grades.",
        mobility: "Must not have resided in Spain for more than 12 months in the 36 months prior to recruitment."
    },
    {
        id: 9, wp: "WP3 - Implementation", location: "Utrecht, Netherlands",
        title: "Epidemiological and Statistical Frameworks for EDI",
        supervisors: ["Dr. Sanne Peters (UMC Utrecht)", "Dr. Mira Zuidgeest (UMC Utrecht)"],
        summary: "Developing statistical tools to assess whether trials are powered to detect treatment effects in population subgroups and determining representativeness of trial populations.",
        background: "Clinical trials are not designed to assess subgroup-specific effect sizes. Epidemiological and statistical approaches are needed for meaningful design, analyses, and interpretation of data from diverse trial populations.",
        objectives: ["Determine to what extent trials can be powered to assess treatment effects in population subgroups.", "Determine representativeness of population groups in clinical trials.", "Assess how trial design can be optimised for robust findings in diverse groups."],
        studies: ["<strong>Study 1:</strong> Power for treatment interaction assessment; statistical tool development.", "<strong>Study 2:</strong> Representativeness assessment comparing trial participants to routine care data.", "<strong>Study 3:</strong> Clinical trial design review including stratified sampling and adaptive recruitment."],
        secondments: ["Two secondment placements in leading research institutions and industry partners"],
        degree: "MSc in epidemiology, pharmacoepidemiology, biostatistics, data science, medicine, or related field.",
        academic: "Strong quantitative background.",
        mobility: "Must not have resided in the Netherlands for more than 12 months in the 36 months prior to recruitment."
    },
    {
        id: 10, wp: "WP3 - Implementation", location: "Utrecht, Netherlands",
        title: "Methodological and Operational Tools for Enhancing EDI",
        supervisors: ["Dr. Mira Zuidgeest (UMC Utrecht)", "Dr. Sanne Peters (UMC Utrecht)"],
        summary: "Evaluating which approaches are deployed to enhance EDI in cardiovascular trials and developing guidance on utilizing evaluated approaches for different stakeholders.",
        background: "While many strategies are proposed to integrate EDI principles into clinical trial design, limited evidence exists on which approaches are effective and for which purpose.",
        objectives: ["Evaluate EDI approaches in cardiovascular clinical trials.", "Determine EDI issues raised during marketing authorisation processes.", "Evaluate and optimize a specific EDI approach in detail.", "Develop guidance for different stakeholders and purposes."],
        studies: ["<strong>Study 1:</strong> EDI approaches in cardiovascular trials using protocols and operational data.", "<strong>Study 2:</strong> EDI issues in market authorisation (EPARs, scientific advice letters).", "<strong>Study 3 & 4:</strong> Evaluation and optimization of specific EDI strategies."],
        secondments: ["Two secondment placements in leading research institutions and industry partners"],
        degree: "MSc in epidemiology, pharmacoepidemiology, pharmacy, biostatistics, data science, medicine, or related field.",
        academic: "Strong analytical skills.",
        mobility: "Must not have resided in the Netherlands for more than 12 months in the 36 months prior to recruitment."
    },
    {
        id: 11, wp: "WP3 - Implementation", location: "Utrecht, Netherlands",
        title: "Ethical Frameworks for EDI in Clinical Trials",
        supervisors: ["Dr. Rieke van der Graaf (UMC Utrecht)", "Dr. Sanne Peters (UMC Utrecht)"],
        summary: "Developing action-guiding ethical principles to enable trialists and stakeholders to address challenges when increasing EDI in trials, including conceptual analysis of fairness and inclusion.",
        background: "While EDI principles are recognized in policy, there is a lack of actionable guidance. Key ethical questions remain: How should protection of vulnerable populations be weighed against promoting equal access? What do fairness and inclusion require in trials?",
        objectives: ["Assess and optimise ethical understanding of fairness and inclusion in research.", "Identify and evaluate ethical aspects of EDI throughout trial processes.", "Develop action-guiding ethical principles and policies."],
        studies: ["<strong>Study 1:</strong> Conceptual analysis of fairness and inclusion.", "<strong>Study 2:</strong> Ethical challenges and opportunities of existing approaches.", "<strong>Study 3:</strong> In-depth ethical assessment of a specific topic.", "<strong>Study 4:</strong> Developing an ethical framework for trialists and ethics committees."],
        secondments: ["Two secondment placements in leading research institutions and industry partners"],
        degree: "Master's in philosophy, applied ethics, or sociology.",
        academic: "Strong academic record; English proficiency; Dutch is an advantage.",
        mobility: "Must not have resided in the Netherlands for more than 12 months in the 36 months prior to recruitment."
    },
    {
        id: 12, wp: "WP3 - Implementation", location: "Galway, Ireland",
        title: "Training Modules for EDI Implementation in Clinical Trials",
        supervisors: ["Dr. Eimear Morrissey (University of Galway)", "Prof. Declan Devane (University of Galway)"],
        summary: "Synthesising evidence on EDI training, building consensus on core competencies, and developing practical training modules for trial personnel through co-design with stakeholders.",
        background: "There is limited practical guidance for trial personnel on embedding EDI principles in day-to-day practices. Barriers such as limited cultural competence, unconscious bias, and lack of inclusive recruitment strategies persist across Europe.",
        objectives: ["Synthesise existing evidence on EDI training.", "Co-design training content with diverse stakeholders.", "Build consensus on core competencies for EDI implementation.", "Pilot, refine, and evaluate practical training modules."],
        studies: ["<strong>Study 1:</strong> Systematic/scoping review of EDI training interventions.", "<strong>Study 2:</strong> Qualitative study with key stakeholders.", "<strong>Study 3:</strong> Delphi/consensus study on core competencies.", "<strong>Study 4:</strong> Pilot and evaluation following MRC guidance."],
        secondments: ["Two secondment placements in leading research institutions and industry partners"],
        degree: "Master's in health sciences, social sciences, psychology, public health, education, implementation science, or related field.",
        academic: "At least 2.1 honours degree with strong Master's grades.",
        mobility: "Must not have resided in Ireland for more than 12 months in the 36 months prior to recruitment."
    },
    {
        id: 13, wp: "WP3 - Implementation", location: "Galway, Ireland",
        title: "Strategies for Culturally Appropriate Dissemination",
        supervisors: ["Dr. Sinéad Hynes (University of Galway)", "Dr. Eimear Morrissey (University of Galway)"],
        summary: "Developing strategies and best practices for culturally appropriate dissemination of clinical trial findings, tailoring communication methods to diverse cultural contexts.",
        background: "Dissemination practices often default to technical language and narrow channels, limiting accessibility. This disproportionately affects underrepresented groups, exacerbating inequities and contributing to mistrust in research.",
        objectives: ["Identify best practices in culturally appropriate dissemination.", "Explore stakeholder perspectives on effective dissemination strategies.", "Build consensus on core elements for clinical trial dissemination.", "Develop draft tools ready for future piloting."],
        studies: ["<strong>Study 1:</strong> Scoping Review of dissemination strategies in health research.", "<strong>Study 2:</strong> Qualitative Study with diverse stakeholders.", "<strong>Study 3:</strong> Co-design workshop for essential elements and initial tools."],
        secondments: ["Two secondment placements in leading research institutions and industry partners"],
        degree: "Degree in public health, social sciences, communication studies, implementation science, or related field.",
        academic: "At least 2.1 degree at undergraduate level.",
        mobility: "Must not have resided in Ireland for more than 12 months in the 36 months prior to recruitment."
    },
    {
        id: 14, wp: "WP4 - Systemic Change", location: "Basel, Switzerland",
        title: "Interactions Between PPIE and EDI",
        supervisors: ["Prof. Matthias Briel (University Hospital Basel)", "Dr. Benjamin Speich (University Hospital Basel)"],
        summary: "Investigating how patient and public involvement and engagement (PPIE) initiatives consider EDI and developing guidance for effective EDI implementation through PPIE.",
        background: "Patient and public involvement and engagement (PPIE) in clinical trials is already well established. PPIE initiatives typically aim to strengthen patient-relevance in trials, which should include EDI principles. How PPIE could promote EDI remains unclear.",
        objectives: ["Clarify attitudes, current practice, and future plans of PPIE initiatives to consider EDI.", "Identify barriers and facilitators for EDI promotion through PPIE.", "Clarify if and how EDI principles could strengthen PPIE.", "Develop guidance for academia and industry."],
        studies: ["<strong>Study 1:</strong> International survey of PPIE initiatives.", "<strong>Study 2:</strong> Semi-structured interviews with PPIE representatives and EDI experts.", "<strong>Study 3:</strong> Stakeholder workshops to develop guidance."],
        secondments: ["Two secondment placements in leading research institutions and industry partners"],
        degree: "Master's in health sciences, social sciences, psychology, public health, education, implementation science, or related field.",
        academic: "Completed Master's degree with excellent grades.",
        mobility: "Must not have resided in Switzerland for more than 12 months in the 36 months prior to recruitment."
    },
    {
        id: 15, wp: "WP4 - Systemic Change", location: "Zagreb, Croatia",
        title: "Stakeholder Perspectives on EDI in Clinical Trials",
        supervisors: ["Prof. Livia Puljak (Catholic University of Croatia)", "Prof. Damir Sapunar (University of Split School of Medicine)"],
        summary: "Mapping beliefs, practices, and review standards across trialists, ethics committees, funders, and patients to identify predictors of stronger EDI implementation.",
        background: "Decisions about eligibility, recruitment, and reporting are shaped by multiple actors—trialists, ethics committees, funders, and patients—whose awareness, criteria, and incentives vary. Evidence on how these stakeholders interpret and operationalize EDI is limited.",
        objectives: ["Explore awareness, definitions, and perceived importance of EDI among trialists.", "Quantify EDI-aware practices and identify predictors of stronger implementation.", "Examine how EDI is assessed during protocol review by ethics committees.", "Investigate EDI policies and review criteria among funders.", "Understand patient awareness and interpretation of EDI."],
        studies: ["<strong>Study 1:</strong> Qualitative study among trialists in different European countries.", "<strong>Study 2:</strong> Cross-sectional study among trialists.", "<strong>Study 3:</strong> Qualitative study among ethics committee members.", "<strong>Study 4:</strong> Qualitative study among funders.", "<strong>Study 5:</strong> Qualitative study among patients."],
        secondments: ["Two secondment placements in leading research institutions and industry partners"],
        degree: "Master's in health sciences, social sciences, psychology, public health, education, implementation science, or related field.",
        academic: "At least 2.1 honours degree with strong Master's grades.",
        mobility: "Must not have resided in Croatia for more than 12 months in the 36 months prior to recruitment."
    },
    {
        id: 16, wp: "WP4 - Systemic Change", location: "Aberdeen, UK",
        title: "Language Considerations in Clinical Trials",
        supervisors: ["Dr. Magdalena Rzewuska Diaz (University of Aberdeen)", "Prof. Shaun Treweek (University of Aberdeen and Uppsala University)"],
        summary: "Developing methods and guidance to help trial teams make informed decisions about translation and interpretation services, determining when language support adds real inclusion value.",
        background: "Translation/interpretation of written materials is often put forward as a way to make trials more inclusive, but discussions with non-native speakers often highlight more important drivers for non-participation such as lack of trust. How to usefully build translation and interpretation into trial planning is poorly understood.",
        objectives: ["Explore how much translation and/or interpretation services are used in trials.", "Systematically collate existing knowledge on when translation/interpretation are essential.", "Develop methods to assess which languages need translation, why, and costs.", "Develop tools and guidance for incorporating language considerations."],
        studies: ["<strong>Study 1:</strong> Evidence synthesis - Systematic/scoping review of translation and interpretation use.", "<strong>Study 2:</strong> Qualitative study with key stakeholders using behavioural frameworks (COM-B/TDF).", "<strong>Study 3:</strong> Method development including decision criteria and mini-MCDA approach.", "<strong>Study 4:</strong> Creating tools and guidance for trial teams."],
        secondments: ["Two secondment placements in leading research institutions and industry partners"],
        degree: "Strong undergraduate degree in health sciences, psychology, public health, implementation science, or related field.",
        academic: "At least 2.1 honours degree with strong track record. Postgraduate study is an advantage.",
        mobility: "Must not have resided in the UK for more than 12 months in the 36 months prior to recruitment."
    }
];

// Render project cards
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    
    grid.innerHTML = projects.map(p => `
        <div class="project-card" onclick="openModal(${p.id})">
            <div class="project-card-header">
                <div class="project-number">${p.id}</div>
                <span class="project-wp">${p.wp}</span>
            </div>
            <h3>${p.title}</h3>
            <div class="project-meta">
                <span>📍 ${p.location}</span>
                <span>👥 ${p.supervisors[0].split('(')[0].trim()}</span>
            </div>
            <p class="project-summary">${p.summary}</p>
            <div class="project-card-footer">
                <span class="view-details">View full details →</span>
            </div>
        </div>
    `).join('');
}

// Open modal
function openModal(id) {
    const p = projects.find(proj => proj.id === id);
    if (!p) return;
    
    const modal = document.getElementById('modal-content');
    modal.innerHTML = `
        <div class="modal-header">
            <div class="modal-badges">
                <span class="project-number">${p.id}</span>
                <span class="project-wp">${p.wp}</span>
            </div>
            <h2>${p.title}</h2>
            <button class="modal-close" onclick="closeModal()">&times;</button>
        </div>
        <div class="modal-body">
            <div class="modal-section">
                <h3>Supervisors</h3>
                <ul class="supervisor-list">${p.supervisors.map(s => `<li>${s}</li>`).join('')}</ul>
            </div>
            <div class="modal-section">
                <h3>Location</h3>
                <p>📍 ${p.location}</p>
            </div>
            <div class="modal-section">
                <h3>Background</h3>
                <p>${p.background}</p>
            </div>
            <div class="modal-section">
                <h3>Objectives</h3>
                <ol>${p.objectives.map(o => `<li>${o}</li>`).join('')}</ol>
            </div>
            <div class="modal-section">
                <h3>Studies</h3>
                <ul>${p.studies.map(s => `<li>${s}</li>`).join('')}</ul>
            </div>
            <div class="modal-section">
                <h3>Secondments</h3>
                <ul>${p.secondments.map(s => `<li>${s}</li>`).join('')}</ul>
            </div>
            <div class="modal-section">
                <h3>Eligibility</h3>
                <p><strong>Degree:</strong> ${p.degree}</p>
                <p><strong>Academic:</strong> ${p.academic}</p>
                <p><strong>Mobility:</strong> ${p.mobility}</p>
            </div>
            <a href="apply.html" class="btn btn-primary modal-apply-btn">Apply for this Position</a>
        </div>
    `;
    
    document.getElementById('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners
document.addEventListener('DOMContentLoaded', renderProjects);

document.getElementById('modal-overlay')?.addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
