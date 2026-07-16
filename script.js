// ========== 常量配置 ==========
const PET_CONFIG = {
    dog: { icon: '🐶', label: '犬' },
    cat: { icon: '🐱', label: '猫' }
};

const POST_SURGERY_OPTIONS = [
    { value: 'spay', label: '绝育手术后一周内' },
    { value: 'other', label: '其他重症术后一周内' },
    { value: 'none', label: '健康状态（非术后）' }
];

// ========== 动态步骤配置（步骤 4-8）==========
// condition: (state) => boolean — 控制步骤是否显示，省略则始终显示
const STEP_CONFIGS = {
    4: {
        dog: {
            title: '运动时长',
            desc: '宝贝每天的运动量如何？',
            key: 'exercise',
            options: [
                { value: 'light', label: '🚶 轻度运动（每天 < 1小时）' },
                { value: 'moderate', label: '🏃 中度运动（1 ~ 3 小时/天）' },
                { value: 'high', label: '🏋️ 高强度工作 / 赛犬' }
            ]
        },
        cat: {
            title: '是否户外散养',
            desc: '宝贝是否有户外散养的情况？',
            key: 'outdoor',
            options: [
                { value: 'yes', label: '🌳 是，会出门活动' },
                { value: 'no', label: '🏠 否，纯室内' }
            ]
        }
    },
    5: {
        dog: {
            title: '体重情况',
            desc: '请选择宝贝的体型状况',
            key: 'bodyCondition',
            options: [
                { value: 'severe', label: '🐷 肥胖<br><small>圆润，俯视无腰身，肋骨摸不到</small>' },
                { value: 'overweight', label: '🐶 超重<br><small>微胖，腰身模糊，肋骨不易摸到</small>' },
                { value: 'normal', label: '🐕 标准<br><small>匀称，腰身明显，肋骨可摸不可见</small>' },
                { value: 'thin', label: '🦮 偏瘦<br><small>削瘦，腰身极细，肋骨可见</small>' }
            ]
        },
        cat: {
            title: '体重情况',
            desc: '请选择宝贝的体型状况',
            key: 'bodyCondition',
            options: [
                { value: 'severe', label: '🐷 肥胖<br><small>圆润，俯视无腰身，肋骨摸不到</small>' },
                { value: 'normal', label: '🐈 标准<br><small>匀称，腰身明显，肋骨可摸不可见</small>' },
                { value: 'thin', label: '🐈‍⬛ 偏瘦<br><small>削瘦，腰身极细，肋骨可见</small>' }
            ]
        }
    },
    6: {
        dog: {
            title: '年龄段',
            desc: '请选择宝贝所在的年龄段',
            key: 'age',
            options: [
                { value: 'baby', label: '🍼 宝宝（4个月以下）' },
                { value: 'young', label: '🐾 幼犬（4 ~ 12个月）' },
                { value: 'adult', label: '🐕 成年犬（1 ~ 7岁）' },
                { value: 'senior', label: '🦯 老年犬（≥ 7岁）' }
            ]
        },
        cat: {
            title: '年龄段',
            desc: '请选择宝贝所在的年龄段',
            key: 'age',
            options: [
                { value: 'baby', label: '🍼 宝宝（4个月以下）' },
                { value: 'young', label: '🐾 幼猫（4 ~ 12个月）' },
                { value: 'adult', label: '🐈 成年猫（1 ~ 7岁）' },
                { value: 'senior', label: '🦯 老年猫（≥ 7岁）' }
            ]
        }
    },
    7: {
        dog: {
            title: '怀孕与哺乳情况',
            desc: '宝贝目前是否怀孕或哺乳？',
            key: 'pregnant',
            condition: (s) => s.gender === 'female' && s.neutered === 'no' && (s.age === 'adult' || s.age === 'senior'),
            options: [
                { value: 'early', label: '怀孕期' },
                { value: 'late', label: '哺乳期' },
                { value: 'none', label: '非孕/哺乳期' }
            ]
        },
        cat: {
            title: '怀孕与哺乳情况',
            desc: '宝贝目前是否怀孕？',
            key: 'pregnant',
            condition: (s) => s.gender === 'female' && s.neutered === 'no' && (s.age === 'adult' || s.age === 'senior'),
            options: [
                { value: 'yes', label: '是，正在怀孕期' },
                { value: 'no', label: '否' }
            ]
        }
    },
    8: {
        dog: {
            title: '术后恢复期',
            desc: '狗狗是否处于术后恢复期？',
            key: 'postSurgery',
            options: POST_SURGERY_OPTIONS
        },
        get cat() {
            return { ...STEP_CONFIGS[8].dog, desc: '猫咪是否处于术后恢复期？' };
        }
    }
};

// ========== 产品数据 ==========
const PRODUCT_DATA = {
    dog: [
        { name: '鸡肉鳕鱼', grams: 120, kcal: 121 },
        { name: '猪肉蓝莓', grams: 120, kcal: 149 },
        { name: '嫩牛牡蛎', grams: 120, kcal: 144 },
        { name: '野牧鹿肉', grams: 120, kcal: 154 },
        { name: '平均数据', grams: 120, kcal: 142 }
    ],
    cat: [
        { name: '鸡肉鳕鱼', grams: 80, kcal: 107 },
        { name: '猪肉蓝莓', grams: 80, kcal: 111 },
        { name: '嫩牛牡蛎', grams: 80, kcal: 127 },
        { name: '野牧鹿肉', grams: 80, kcal: 132 },
        { name: '平均数据', grams: 80, kcal: 119 }
    ]
};

const CALORIE_DEFICIT_RATIO = 0.9;

// ========== 历史记录配置 ==========
const HISTORY_KEY = 'ukioki_history';
const MAX_HISTORY = 50;

// ========== 状态管理 ==========
const INITIAL_STATE = {
    petType: null, weight: null, gender: null, neutered: null,
    exercise: null, outdoor: null, bodyCondition: null, age: null,
    pregnant: null, postSurgery: null
};

let state = { ...INITIAL_STATE };
let currentStep = 0;
let currentMER = 0;
let activeTab = 'calc';

// ========== DOM 元素缓存 ==========
const dom = {};

function cacheElements() {
    const ids = [
        'weightInput', 'progressBar',
        'resultIcon', 'resultValue', 'detailPet', 'detailWeight',
        'detailRER', 'detailCoeff', 'resultNoteContent',
        'btnFeedingCalc', 'feedingBtnWrapper',
        'feedingIcon', 'feedingMerValue', 'suggestionBody',
        'customCalorieInput', 'customResult',
        'snapshotCard', 'snapshotLine1', 'snapshotMer', 'snapshotPacks',
        'imagePreviewModal', 'imagePreviewImg', 'imagePreviewClose',
        'toast',
        'historyPanel', 'historyHeader', 'historyList', 'historyEmpty', 'historyClearBtn',
        'historyDetail', 'historyDetailClose',
        'hdFeedingIcon', 'hdFeedingMer', 'hdCustomCalorie', 'hdCustomResult', 'hdSuggestionBody',
        'hdShareBtn',
        'tabBar'
    ];
    ids.forEach(id => dom[id] = document.getElementById(id));
    // 动态步骤按钮（btnNext0-8）
    for (let i = 0; i <= 8; i++) {
        dom[`btnNext${i}`] = document.getElementById(`btnNext${i}`);
    }
}

// ========== 工具函数 ==========
const getPetConfig = () => PET_CONFIG[state.petType];

function roundToHalf(value) {
    return Math.round(value * 2) / 2;
}

function formatPacks(packs) {
    return Number.isInteger(packs) ? packs.toString() : packs.toFixed(1);
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// 通用选中切换
function toggleSelection(container, selector, value) {
    container.querySelectorAll(selector).forEach(el => el.classList.remove('selected'));
    const target = container.querySelector(`${selector}[data-value="${value}"]`);
    if (target) target.classList.add('selected');
}

// ========== 图片处理（分享功能）==========
async function convertImagesToBase64(container) {
    const images = container.querySelectorAll('img');
    for (const img of images) {
        if (img.src && !img.src.startsWith('data:')) {
            try {
                const response = await fetch(img.src);
                const blob = await response.blob();
                img.src = await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                });
            } catch (e) {
                console.warn('图片转换失败:', e);
            }
        }
    }
}

async function captureSnapshot() {
    if (!dom.snapshotCard) return null;
    await convertImagesToBase64(dom.snapshotCard);

    const canvas = await html2canvas(dom.snapshotCard, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false
    });

    return new Promise(resolve => {
        canvas.toBlob(blob => resolve({ canvas, blob }), 'image/png');
    });
}

function downloadImage(blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ukioki-${state.petType || 'pet'}-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function showImagePreview(canvas) {
    dom.imagePreviewImg.src = canvas.toDataURL('image/png');
    dom.imagePreviewModal.classList.add('active');
}

// 分享预览回退（不支持 Web Share 时显示图片预览）
function showPreviewFallback(canvas) {
    showImagePreview(canvas);
    showToast('长按图片保存或分享');
}

// ========== 规则工厂函数 ==========
function createPostSurgeryRule(spayCoeff, otherCoeff = 1.0) {
    return {
        name: '术后',
        apply: (state, prev) => {
            if (state.postSurgery === 'spay')
                return { coeff: spayCoeff, note: `绝育术后恢复 ${spayCoeff}` };
            if (state.postSurgery === 'other')
                return { coeff: otherCoeff, note: `其他术后 ${otherCoeff}` };
            return { coeff: prev.coeff, note: prev.note + ' → 健康状态(继承)' };
        }
    };
}

// ========== 系数计算规则链 ==========
const COEFFICIENT_RULES = {
    dog: [
        {
            name: '运动+绝育',
            apply: (state) => {
                if (state.exercise === 'light') {
                    return state.neutered === 'yes'
                        ? { coeff: 1.2, note: '绝育犬轻度运动 1.2' }
                        : { coeff: 1.4, note: '未绝育犬轻度运动 1.4' };
                }
                if (state.exercise === 'moderate') {
                    return state.neutered === 'yes'
                        ? { coeff: 1.6, note: '绝育犬中度运动 1.6' }
                        : { coeff: 1.8, note: '未绝育犬中度运动 1.8' };
                }
                return { coeff: 2.0, note: '高强度运动 2.0' };
            }
        },
        {
            name: '体型',
            apply: (state, prev) => {
                if (state.bodyCondition === 'severe') return { coeff: 1.0, note: '严重超重 1' };
                if (state.bodyCondition === 'overweight') return { coeff: 1.2, note: '超重 1.2' };
                if (state.bodyCondition === 'thin') return { coeff: 2.0, note: '偏瘦 2' };
                return { coeff: prev.coeff, note: prev.note + ' → 正常体型(继承)' };
            }
        },
        {
            name: '年龄',
            apply: (state, prev) => {
                if (state.age === 'baby') return { coeff: 3.0, note: '宝宝犬 3.0' };
                if (state.age === 'young') return { coeff: 2.0, note: '幼犬 2.0' };
                if (state.age === 'senior') return { coeff: 1.2, note: '老年犬 1.2' };
                return { coeff: prev.coeff, note: prev.note + ' → 成年犬(继承)' };
            }
        },
        {
            name: '孕哺',
            apply: (state, prev) => {
                if (state.pregnant === 'early') return { coeff: 1.8, note: '怀孕期 1.8' };
                if (state.pregnant === 'late') return { coeff: 2.0, note: '哺乳期 2.0' };
                return { coeff: prev.coeff, note: prev.note + ' → 非孕/哺乳期(继承)' };
            }
        },
        createPostSurgeryRule(1.4)
    ],
    cat: [
        {
            name: '绝育',
            apply: (state) => {
                return state.neutered === 'yes'
                    ? { coeff: 1.2, note: '已绝育猫 1.2' }
                    : { coeff: 1.4, note: '未绝育猫 1.4' };
            }
        },
        {
            name: '户外',
            apply: (state, prev) => {
                if (state.outdoor === 'yes') return { coeff: 1.6, note: '户外散养 1.6' };
                return { coeff: prev.coeff, note: prev.note + ' → 室内(继承)' };
            }
        },
        {
            name: '体型',
            apply: (state, prev) => {
                if (state.bodyCondition === 'severe') return { coeff: 0.9, note: prev.note + ' → 超重 0.9' };
                if (state.bodyCondition === 'thin') return { coeff: 1.4, note: prev.note + ' → 偏瘦 1.4' };
                return { coeff: prev.coeff, note: prev.note + ' → 正常体重(继承)' };
            }
        },
        {
            name: '年龄',
            apply: (state, prev) => {
                if (state.age === 'baby') return { coeff: 2.7, note: '宝宝猫 2.7' };
                if (state.age === 'young') return { coeff: 2.0, note: '幼猫 2.0' };
                if (state.age === 'senior') return { coeff: 1.0, note: '老年猫 1.0' };
                return { coeff: prev.coeff, note: prev.note + ' → 成年猫(继承)' };
            }
        },
        {
            name: '怀孕',
            apply: (state, prev) => {
                if (state.pregnant === 'yes') return { coeff: 2.5, note: '怀孕期 2.5' };
                return { coeff: prev.coeff, note: prev.note + ' → 非孕期(继承)' };
            }
        },
        createPostSurgeryRule(1.2)
    ]
};

// ========== 流程控制 ==========
// 通用步骤流生成：遍历 STEP_CONFIGS，检查 condition
function getStepFlow() {
    const flow = [0, 1, 2, 3];
    for (let i = 4; i <= 8; i++) {
        const config = STEP_CONFIGS[i]?.[state.petType];
        if (!config || (config.condition && !config.condition(state))) continue;
        flow.push(i);
    }
    flow.push(9);
    return flow;
}

function getStepKey(stepNum) {
    const config = STEP_CONFIGS[stepNum]?.[state.petType];
    if (config) return config.key;
    const staticKeys = { 2: 'gender', 3: 'neutered' };
    return staticKeys[stepNum] || null;
}

function navigateStep(offset) {
    const flow = getStepFlow();
    const idx = flow.indexOf(currentStep);
    const next = idx + offset;
    if (next >= 0 && next < flow.length) {
        const nextStepNum = flow[next];
        // 从最后一个问题步骤进入结果页时，保存历史记录
        if (currentStep === 8 && nextStepNum === 9) {
            saveToHistory();
        }
        showStep(nextStepNum);
    }
}

// ========== UI 渲染 ==========
function renderStepOptions(stepNum) {
    const config = STEP_CONFIGS[stepNum]?.[state.petType];
    if (!config) return;

    const stepEl = document.getElementById(`step-${stepNum}`);
    if (!stepEl) return;

    const titleEl = stepEl.querySelector('.step-title');
    const descEl = stepEl.querySelector('.step-desc');
    const optionsEl = stepEl.querySelector('.options');

    if (titleEl) titleEl.textContent = config.title;
    if (descEl) descEl.textContent = config.desc;
    if (optionsEl) {
        optionsEl.innerHTML = config.options.map(opt => `
            <div class="option-btn" data-step="${stepNum}" data-key="${config.key}" data-value="${opt.value}">
                <span class="dot"></span>
                <span class="option-label">${opt.label}</span>
            </div>
        `).join('');
    }
}

// 进度条节点缓存
let progressNodes = [];

function buildProgressBar() {
    const bar = dom.progressBar;
    bar.innerHTML = '';
    progressNodes = [];
    // 固定 9 段（对应步骤 0-8），不随条件步骤变化
    for (let i = 0; i < 9; i++) {
        const div = document.createElement('div');
        div.className = 'progress-step';
        div.id = 'prog-' + i;
        bar.appendChild(div);
        progressNodes.push(div);
    }
    updateProgress();
}

function updateProgress() {
    const flow = getStepFlow();
    const currentIdx = flow.indexOf(currentStep);
    progressNodes.forEach((el, i) => {
        el.classList.remove('active', 'done');
        const stepNum = i; // 段 i 对应步骤 i
        const flowIdx = flow.indexOf(stepNum);
        if (flowIdx >= 0) {
            // 步骤在流程中
            if (flowIdx < currentIdx) el.classList.add('done');
            else if (flowIdx === currentIdx) el.classList.add('active');
        } else {
            // 条件跳过的步骤，只有当前位置已越过才标记为 done
            if (stepNum < flow[currentIdx]) el.classList.add('done');
        }
    });
}

function showStep(stepNum) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    const stepEl = document.getElementById('step-' + stepNum);
    if (stepEl) {
        stepEl.classList.add('active');
        stepEl.style.animation = 'none';
        stepEl.offsetHeight;
        stepEl.style.animation = '';
    }
    currentStep = stepNum;
    updateProgress();
    configureStep(stepNum);
}

function configureStep(stepNum) {
    if (STEP_CONFIGS[stepNum]) {
        renderStepOptions(stepNum);
    } else if (stepNum === 9) {
        showResult();
    }
    if (getStepKey(stepNum) !== null) restoreSelection(stepNum);
}

function restoreSelection(stepNum) {
    const key = getStepKey(stepNum);
    if (key && state[key] !== null) {
        const stepEl = document.getElementById('step-' + stepNum);
        toggleSelection(stepEl, '.option-btn', state[key]);
        const btnNext = dom['btnNext' + stepNum];
        if (btnNext) btnNext.disabled = false;
    }
}

// ========== 业务逻辑 ==========
function calculateCoefficient() {
    const rules = COEFFICIENT_RULES[state.petType];
    let result = { coeff: 1.0, note: '' };
    const trail = [];
    for (const rule of rules) {
        result = rule.apply(state, result);
        trail.push(`${rule.name}: ${result.note}`);
    }
    return { ...result, trail };
}

function showResult() {
    const pet = getPetConfig();
    const { coeff, trail } = calculateCoefficient();
    const rer = 70 * Math.pow(state.weight, 0.75);
    const mer = rer * coeff;
    currentMER = mer;

    dom.resultIcon.textContent = pet.icon;
    dom.resultValue.textContent = Math.round(mer);
    dom.detailPet.textContent = pet.label;
    dom.detailWeight.textContent = state.weight + ' kg';
    dom.detailRER.textContent = Math.round(rer) + ' 千卡';
    dom.detailCoeff.textContent = coeff.toFixed(1);

    const finalStep = trail[trail.length - 1] || '';
    const stepContent = finalStep.replace(/^[^:]+:\s*/, '');

    dom.resultNoteContent.innerHTML =
        '* MER = RER × 推导系数<br>' +
        '* RER = 70 × ' + state.weight + 'kg<sup>0.75</sup> = ' + Math.round(rer) + ' 千卡<br>' +
        '* 推导系数 = ' + coeff.toFixed(1) +
        '<div class="trail-list"><div class="trail-step">→ ' + stepContent + '</div></div>';

    renderBrandSuggestions();
}

function renderBrandSuggestions() {
    const products = PRODUCT_DATA[state.petType];
    const adjustedMER = currentMER * CALORIE_DEFICIT_RATIO;

    dom.suggestionBody.innerHTML = products.map(product => {
        const packs = roundToHalf(adjustedMER / product.kcal);
        const isAverage = product.name === '平均数据';
        return `
            <div class="suggestion-row ${isAverage ? 'average-row' : ''}">
                <span class="col-flavor">${product.name}</span>
                <span class="col-kcal">${product.kcal} kcal</span>
                <span class="col-grams">${product.grams}g</span>
                <span class="col-packs">${packs.toFixed(1)} 包</span>
            </div>
        `;
    }).join('');
}

function updateSnapshotData(fromDetail = false) {
    const petName = state.petType === 'dog' ? '小狗' : '小猫';
    dom.snapshotLine1.textContent = `我家${petName}一天要摄入`;

    const merSource = fromDetail ? dom.hdFeedingMer : dom.feedingMerValue;
    const bodySource = fromDetail ? dom.hdSuggestionBody : dom.suggestionBody;

    dom.snapshotMer.textContent = merSource.textContent;
    const avgRow = bodySource.querySelector('.average-row .col-packs');
    if (avgRow) {
        const packsNum = parseFloat(avgRow.textContent.trim().replace(' 包', ''));
        dom.snapshotPacks.textContent = formatPacks(packsNum);
    }
}

// ========== 事件处理 ==========
function selectPet(type) {
    state.petType = type;
    toggleSelection(document.querySelector('.pet-options'), '.pet-card', type);
    dom.btnNext0.disabled = false;
}

function onWeightInput() {
    const val = parseFloat(dom.weightInput.value);
    state.weight = val > 0 ? val : null;
    dom.btnNext1.disabled = !(val > 0);
}

function selectOption(step, key, value) {
    state[key] = value;
    const stepEl = document.getElementById('step-' + step);
    toggleSelection(stepEl, '.option-btn', value);
    const btnNext = dom['btnNext' + step];
    if (btnNext) btnNext.disabled = false;
}

function restart() {
    state = { ...INITIAL_STATE };
    currentMER = 0;
    switchTab('calc');
    dom.weightInput.value = '';
    document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
    document.querySelectorAll('[id^="btnNext"]').forEach(btn => btn.disabled = true);
    dom.customCalorieInput.value = '';
    dom.customResult.innerHTML = '';
    dom.customResult.classList.remove('show');
    dom.progressBar.style.display = '';
    buildProgressBar();
    showStep(0);
}

function goToFeedingPage() {
    const pet = getPetConfig();
    dom.feedingIcon.textContent = pet.icon;
    dom.feedingMerValue.textContent = Math.round(currentMER);
    renderBrandSuggestions();
    dom.progressBar.style.display = 'none';
    showStep(10);
}

function onCustomCalorieInput(e) {
    const kcalPerPack = parseFloat(e.target.value);

    if (kcalPerPack > 0 && currentMER > 0) {
        const adjustedMER = currentMER * CALORIE_DEFICIT_RATIO;
        const packs = roundToHalf(adjustedMER / kcalPerPack);
        dom.customResult.innerHTML = `每天建议喂食 <strong>${packs.toFixed(1)} 包</strong>`;
        dom.customResult.classList.add('show');
    } else {
        dom.customResult.innerHTML = '';
        dom.customResult.classList.remove('show');
    }
}

// ========== 分享逻辑 ==========
async function handleShare(fromDetail = false) {
    try {
        showToast('正在生成图片...');
        updateSnapshotData(fromDetail);
        const { canvas, blob } = await captureSnapshot();

        if (!blob) {
            showToast('生成图片失败');
            return;
        }

        if (!isMobile()) {
            downloadImage(blob);
            showToast('图片已保存');
            return;
        }

        // 移动端：尝试 Web Share API
        const file = new File([blob], 'ukioki-snapshot.png', { type: 'image/png' });
        const shareData = {
            files: [file],
            title: 'uki oki 热量计算结果',
            text: '来看看我家毛孩子的一天热量需求吧！'
        };

        if (navigator.share && navigator.canShare(shareData)) {
            try {
                await navigator.share(shareData);
                showToast('分享成功');
            } catch (err) {
                if (err.name !== 'AbortError') showPreviewFallback(canvas);
            }
        } else {
            showPreviewFallback(canvas);
        }
    } catch (err) {
        console.error('生成图片失败:', err);
        showToast('生成图片失败: ' + err.message);
    }
}

// ========== Toast 提示 ==========
function showToast(message) {
    if (!dom.toast) return;
    dom.toast.textContent = message;
    dom.toast.classList.add('show');
    setTimeout(() => dom.toast.classList.remove('show'), 2000);
}

// ========== 历史记录管理 ==========
function loadHistory() {
    try {
        const data = localStorage.getItem(HISTORY_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function saveHistory(records) {
    try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(records));
    } catch (e) {
        console.warn('历史记录保存失败:', e);
    }
}

function saveToHistory() {
    if (!state.petType || !state.weight) return;
    const records = loadHistory();
    const rer = 70 * Math.pow(state.weight, 0.75);
    const { coeff } = calculateCoefficient();
    const mer = rer * coeff;

    records.unshift({
        id: String(Date.now()),
        state: { ...state },
        mer: Math.round(mer),
        rer: Math.round(rer),
        coeff,
        timestamp: Date.now()
    });

    if (records.length > MAX_HISTORY) records.length = MAX_HISTORY;
    saveHistory(records);
}

function formatDate(ts) {
    const d = new Date(ts);
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}/${mm}/${dd}`;
}

function renderHistory() {
    const records = loadHistory();
    const list = dom.historyList;
    const empty = dom.historyEmpty;

    if (records.length === 0) {
        list.innerHTML = '';
        empty.classList.add('show');
        return;
    }

    empty.classList.remove('show');
    list.innerHTML = records.map(record => {
        const pet = PET_CONFIG[record.state.petType] || { icon: '🐾', label: '未知' };
        return `
            <div class="history-card" data-record-id="${record.id}">
                <div class="history-card-icon">${pet.icon}</div>
                <div class="history-card-info">
                    <div class="history-card-top">
                        <span class="history-card-pet">${pet.label}</span>
                        <span class="history-card-weight">${record.state.weight} kg</span>
                    </div>
                    <div class="history-card-date">${formatDate(record.timestamp)}</div>
                </div>
                <div class="history-card-mer">MER ${record.mer} 千卡</div>
                <button class="history-card-delete" data-delete-id="${record.id}" aria-label="删除记录">✕</button>
            </div>
        `;
    }).join('');
}

function deleteRecord(id) {
    let records = loadHistory();
    records = records.filter(r => r.id !== id);
    saveHistory(records);
    renderHistory();
    showToast('记录已删除');
}

function clearHistory() {
    saveHistory([]);
    renderHistory();
    showToast('记录已清空');
}

function viewRecord(id) {
    const records = loadHistory();
    const record = records.find(r => r.id === id);
    if (!record) return;

    state = { ...record.state };
    currentMER = record.mer;

    renderHistoryDetail(record);
    dom.historyHeader.style.display = 'none';
    dom.historyList.style.display = 'none';
    dom.historyEmpty.style.display = 'none';
    dom.historyDetail.classList.add('show');
}

function closeHistoryDetail() {
    dom.historyDetail.classList.remove('show');
    dom.historyHeader.style.display = '';
    dom.historyList.style.display = '';
    dom.historyEmpty.style.display = '';
    dom.hdCustomCalorie.value = '';
    dom.hdCustomResult.innerHTML = '';
    dom.hdCustomResult.classList.remove('show');
}

function renderHistoryDetail(record) {
    const pet = PET_CONFIG[record.state.petType] || { icon: '🐾', label: '未知' };

    dom.hdFeedingIcon.textContent = pet.icon;
    dom.hdFeedingMer.textContent = record.mer;

    // 渲染品牌建议表
    const products = PRODUCT_DATA[record.state.petType];
    const adjustedMER = record.mer * CALORIE_DEFICIT_RATIO;
    dom.hdSuggestionBody.innerHTML = products.map(product => {
        const packs = roundToHalf(adjustedMER / product.kcal);
        const isAverage = product.name === '平均数据';
        return `
            <div class="suggestion-row ${isAverage ? 'average-row' : ''}">
                <span class="col-flavor">${product.name}</span>
                <span class="col-kcal">${product.kcal} kcal</span>
                <span class="col-grams">${product.grams}g</span>
                <span class="col-packs">${packs.toFixed(1)} 包</span>
            </div>
        `;
    }).join('');
}

// ========== Tab 切换 ==========
function switchTab(tab) {
    activeTab = tab;
    const container = document.querySelector('.container');

    dom.tabBar.querySelectorAll('.tab-item').forEach(item => {
        item.classList.toggle('active', item.dataset.tab === tab);
    });

    if (tab === 'history') {
        container.classList.add('history-active');
        closeHistoryDetail();
        renderHistory();
    } else {
        container.classList.remove('history-active');
    }
}

// ========== 初始化工具函数 ==========
function initDynamicSteps() {
    const content = document.querySelector('.content');
    const step9 = document.getElementById('step-9');
    const stepTemplate = `
        <div class="step-title"></div>
        <div class="step-desc"></div>
        <div class="options"></div>
        <div class="btn-row">
            <button class="btn btn-back" data-action="prev">上一步</button>
            <button class="btn btn-next" disabled data-action="next">下一步</button>
        </div>
    `;

    for (let i = 4; i <= 8; i++) {
        const step = document.createElement('div');
        step.className = 'step';
        step.id = `step-${i}`;
        step.innerHTML = stepTemplate;
        step.querySelector('.btn-next').id = `btnNext${i}`;
        if (i === 8) {
            step.querySelector('[data-action="next"]').textContent = '计算结果 🎉';
        }
        content.insertBefore(step, step9);
        dom[`btnNext${i}`] = step.querySelector('.btn-next');
    }
}

function initFireflies() {
    const wrapper = document.getElementById('feedingBtnWrapper');
    if (!wrapper) return;
    for (let i = 1; i <= 6; i++) {
        const span = document.createElement('span');
        span.className = `firefly firefly-${i}`;
        wrapper.appendChild(span);
    }
}

// ========== 初始化 ==========
initDynamicSteps();
initFireflies();
cacheElements();

// ========== 事件绑定 ==========
document.querySelector('.content').addEventListener('click', function(e) {
    const petCard = e.target.closest('.pet-card');
    if (petCard && petCard.dataset.pet) {
        selectPet(petCard.dataset.pet);
        return;
    }
    const optBtn = e.target.closest('.option-btn');
    if (optBtn && optBtn.dataset.step) {
        selectOption(
            parseInt(optBtn.dataset.step),
            optBtn.dataset.key,
            optBtn.dataset.value
        );
        return;
    }
    const actionBtn = e.target.closest('[data-action]');
    if (actionBtn) {
        const action = actionBtn.dataset.action;
        if (action === 'next') navigateStep(1);
        else if (action === 'prev') navigateStep(-1);
        else if (action === 'restart') restart();
        else if (action === 'share') handleShare();
    }
});

dom.weightInput.addEventListener('input', onWeightInput);
dom.btnFeedingCalc.addEventListener('click', goToFeedingPage);
dom.customCalorieInput.addEventListener('input', onCustomCalorieInput);

// Tab 栏点击
dom.tabBar.addEventListener('click', function(e) {
    const tabItem = e.target.closest('.tab-item');
    if (tabItem && tabItem.dataset.tab) {
        switchTab(tabItem.dataset.tab);
    }
});

// 历史记录面板点击（事件委托）
dom.historyList.addEventListener('click', function(e) {
    const deleteBtn = e.target.closest('.history-card-delete');
    if (deleteBtn) {
        e.stopPropagation();
        deleteRecord(deleteBtn.dataset.deleteId);
        return;
    }
    const card = e.target.closest('.history-card');
    if (card && card.dataset.recordId) {
        viewRecord(card.dataset.recordId);
    }
});

// 清空历史记录
dom.historyClearBtn.addEventListener('click', function() {
    if (loadHistory().length === 0) return;
    clearHistory();
});

// 历史详情：关闭按钮
dom.historyDetailClose.addEventListener('click', closeHistoryDetail);

// 历史详情：自定义热量输入
dom.hdCustomCalorie.addEventListener('input', function(e) {
    const kcalPerPack = parseFloat(e.target.value);
    if (kcalPerPack > 0 && currentMER > 0) {
        const adjustedMER = currentMER * CALORIE_DEFICIT_RATIO;
        const packs = roundToHalf(adjustedMER / kcalPerPack);
        dom.hdCustomResult.innerHTML = `每天建议喂食 <strong>${packs.toFixed(1)} 包</strong>`;
        dom.hdCustomResult.classList.add('show');
    } else {
        dom.hdCustomResult.innerHTML = '';
        dom.hdCustomResult.classList.remove('show');
    }
});

// 历史详情：分享按钮
dom.hdShareBtn.addEventListener('click', () => handleShare(true));

// result-note 展开/收起动画
const resultNote = document.querySelector('.result-note');
const resultNoteSummary = resultNote.querySelector('summary');
const resultNoteWrapper = resultNote.querySelector('.result-note-wrapper');
const headerIcon = document.querySelector('.header-icon');

resultNoteSummary.addEventListener('click', function(e) {
    e.preventDefault();

    if (resultNote.open) {
        resultNote.classList.add('closing');

        let closed = false;
        const onCloseEnd = (e) => {
            if (closed || e.propertyName !== 'max-height') return;
            closed = true;
            resultNote.open = false;
            resultNote.classList.remove('closing');
            resultNoteWrapper.removeEventListener('transitionend', onCloseEnd);
            headerIcon.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
        resultNoteWrapper.addEventListener('transitionend', onCloseEnd);

        setTimeout(() => {
            if (!closed) {
                closed = true;
                resultNote.open = false;
                resultNote.classList.remove('closing');
                resultNoteWrapper.removeEventListener('transitionend', onCloseEnd);
            }
        }, 600);
    } else {
        resultNote.open = true;
        setTimeout(() => {
            dom.btnFeedingCalc.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
    }
});

// 图片预览弹窗事件
dom.imagePreviewClose?.addEventListener('click', () => dom.imagePreviewModal.classList.remove('active'));
dom.imagePreviewModal?.addEventListener('click', (e) => {
    if (e.target === dom.imagePreviewModal) dom.imagePreviewModal.classList.remove('active');
});

buildProgressBar();
