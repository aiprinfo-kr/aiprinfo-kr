// 카드 데이터 - 이제 시즌별로 완전히 다른 카드 구성 가능
const cardData = {
    season1: {
        '4star': [
            { id: 1, image: 'cards/1D/4S/17530736049.png', character: '소라', name: '팝핀 하트 스타리 네온', owned: true },
            { id: 2, image: 'cards/1D/4S/17530736159.png', character: '소라', name: '팝핀 하트 스타리 네온 (사인ver.)', owned: true },
            { id: 3, image: 'cards/1D/4S/17530736509.png', character: '초아', name: '미라클 문 스타리 네온', owned: true },
            { id: 4, image: 'cards/1D/4S/17530736629.png', character: '초아', name: '미라클 문 스타리 네온 (사인ver.)', owned: true },
            { id: 5, image: 'cards/1D/4S/17530736699.png', character: '세빈', name: '스칼렛 버터플라이 스타리 네온', owned: true },
            { id: 6, image: 'cards/1D/4S/17530736859.png', character: '세빈', name: '스칼렛 버터플라이 스타리 네온 (사인ver.)', owned: true },
            { id: 7, image: 'cards/1D/4S/17530736959.png', character: '소라', name: '큐티 래빗', owned: true },
            { id: 8, image: 'cards/1D/4S/17530737069.png', character: '소라', name: '큐티 래빗 (사인ver.)', owned: true },
            { id: 9, image: 'cards/1D/4S/17530737159.png', character: '초아', name: '큐티 래빗 블루', owned: true },
            { id: 10, image: 'cards/1D/4S/17530737239.png', character: '소라', name: '도넛 파티시에르', owned: true },
            { id: 11, image: 'cards/1D/4S/17530737319.png', character: '초아', name: '도넛 파티시에르', owned: true },
            { id: 12, image: 'cards/1D/4S/17530737389.png', character: '초아', name: '말랑말랑 젤리 소다', owned: true },
            { id: 13, image: 'cards/1D/4S/17530737529.png', character: '소라', name: '말랑말랑 젤리 소다', owned: true },
            { id: 14, image: 'cards/1D/4S/17530737609.png', character: '세빈', name: '리치 베리 타르트', owned: true },
            { id: 15, image: 'cards/1D/4S/17530737679.png', character: '세빈', name: '리치 베리 타르트', owned: true },
            { id: 16, image: 'cards/1D/4S/17530737769.png', character: '소라', name: '웰컴 체리', owned: true },
            { id: 17, image: 'cards/1D/4S/17530737889.png', character: '초아', name: '웰컴 체리 블루', owned: true },
            { id: 18, image: 'cards/1D/4S/17530738019.png', character: '초아', name: '반짝반짝 젤리피쉬 블루', owned: true },
            { id: 19, image: 'cards/1D/4S/17530738179.png', character: '소라', name: '반짝반짝 젤리피쉬 핑크', owned: true },
            { id: 20, image: 'cards/1D/4S/17530738349.png', character: '세빈', name: '버터플라이 매직', owned: true },
            { id: 21, image: 'cards/1D/4S/17530738419.png', character: '세빈', name: '버터플라이 매직 크림슨', owned: true },
            { id: 22, image: 'cards/1D/4S/17530738499.png', character: '소라', name: '해피 버스데이! 소라', owned: true },
            { id: 23, image: 'cards/1D/4S/17530738579.png', character: '소라', name: '해피 버스데이! 소라 (사인ver.)', owned: true },
            { id: 24, image: 'cards/1D/4S/17530738669.png', character: '초아', name: '해피 버스데이! 초아', owned: true },
            // ... 1탄 4성
        ],
        '3star': [
            { id: 101, image: 'cards/1D/3S/17530783319.png', character: '소라', name: '아이프리버스 팝핀 하트', owned: true },
            { id: 102, image: 'cards/1D/3S/17530783379.png', character: '소라', name: '아이프리버스 팝핀 하트 그린', owned: true },
            { id: 103, image: 'cards/1D/3S/17530783439.png', character: '초아', name: '아이프리버스 미라클 문', owned: true },
            { id: 104, image: 'cards/1D/3S/17530783509.png', character: '초아', name: '아이프리버스 미라클 문 오렌지', owned: true },
            { id: 105, image: 'cards/1D/3S/17530783589.png', character: '세빈', name: '아이프리버스 스칼렛 버터플라이', owned: true },
            { id: 106, image: 'cards/1D/3S/17530783659.png', character: '세빈', name: '아이프리버스 스칼렛 버터플라이', owned: true },
            { id: 107, image: 'cards/1D/3S/17530783719.png', character: '소라', name: '플라워 튤', owned: true },
            { id: 108, image: 'cards/1D/3S/17530783789.png', character: '초아', name: '플라워 튤', owned: true },
            { id: 109, image: 'cards/1D/3S/17530783849.png', character: '초아', name: '플라워 튤 민트', owned: true },
            { id: 110, image: 'cards/1D/3S/17530783919.png', character: '소라', name: '플라워 튤 민트', owned: true },
            // ... 1탄 3성
        ],
        '2star': [
            { id: 201, image: 'cards/season1/2star/card1.jpg', character: '시즌1 캐릭터5', name: '시즌1 카드5', owned: false },
            // ... 1탄 2성
        ]
    },
    season2: {
        '4star': [
            { id: 1001, image: 'cards/season2/4star/card1.jpg', character: '시즌2 캐릭터1', name: '시즌2 카드1', owned: true },
            { id: 1002, image: 'cards/season2/4star/card2.jpg', character: '시즌2 캐릭터2', name: '시즌2 카드2', owned: false },
            // ... 시즌2만의 4성 카드들 (완전히 다른 카드들)
        ],
        '3star': [
            { id: 1101, image: 'cards/season2/3star/card1.jpg', character: '시즌2 캐릭터3', name: '시즌2 카드3', owned: true },
            // ... 시즌2만의 3성 카드들
        ],
        '2star': [
            { id: 1201, image: 'cards/season2/2star/card1.jpg', character: '시즌2 캐릭터4', name: '시즌2 카드4', owned: true },
            // ... 시즌2만의 2성 카드들
        ]
    }
};

// 카드 생성 함수
function createCardElement(card) {
    return `
        <div class="card ${card.owned ? 'owned' : 'not-owned'}" data-card-id="${card.id}">
            <div class="card-image-container">
                <img src="${card.image}" alt="${card.name}" class="card-image">
            </div>
            <div class="card-text">
                <div class="character-name">${card.character}</div>
                <div class="card-name">${card.name}</div>
            </div>
        </div>
    `;
}

// 각 시즌별 카드 렌더링 함수
function renderAllSeasonCards() {
    // 시즌1 카드 렌더링
    renderCards('season1', '4star', 'season1-4star');
    renderCards('season1', '3star', 'season1-3star');
    renderCards('season1', '2star', 'season1-2star');
    
    // 시즌2 카드 렌더링
    renderCards('season2', '4star', 'season2-4star');
    renderCards('season2', '3star', 'season2-3star');
    renderCards('season2', '2star', 'season2-2star');
}

function renderCards(season, rarity, containerId) {
    const container = document.getElementById(containerId);
    const cards = cardData[season][rarity];
    
    container.innerHTML = cards.map(card => createCardElement(card)).join('');
}

// 탭 전환 기능
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        // 모든 탭 비활성화
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // 모든 시즌 컨텐츠 숨기기
        document.querySelectorAll('.season-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // 현재 탭 활성화
        this.classList.add('active');
        
        const season = this.dataset.tab;
        
        // 해당 시즌 컨텐츠 표시
        document.getElementById(`${season}-content`).classList.add('active');
    });
});

// 캡처 기능
document.getElementById('captureBtn').addEventListener('click', function() {
    html2canvas(document.querySelector('.container')).then(canvas => {
        const link = document.createElement('a');
        link.download = 'my-collection.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});

// 초기 로딩 시 모든 카드 렌더링 + 클릭 이벤트 설정
document.addEventListener('DOMContentLoaded', function() {
    renderAllSeasonCards();
    setupCardClickEvents(); // 이 줄 추가!
});

// 카드 클릭 이벤트 처리 함수
function setupCardClickEvents() {
    // 카드 클릭 이벤트 리스너 추가
    document.addEventListener('click', function(e) {
        const cardElement = e.target.closest('.card');
        if (cardElement) {
            const cardId = parseInt(cardElement.dataset.cardId);
            toggleCardOwnership(cardId);
        }
    });
}

// 카드 보유 상태 토글 함수
function toggleCardOwnership(cardId) {
    // 모든 시즌에서 해당 카드 찾기
    for (const season in cardData) {
        for (const rarity in cardData[season]) {
            const cardIndex = cardData[season][rarity].findIndex(card => card.id === cardId);
            if (cardIndex !== -1) {
                // 보유 상태 토글
                cardData[season][rarity][cardIndex].owned = !cardData[season][rarity][cardIndex].owned;
                
                // UI 업데이트
                updateCardUI(cardId, cardData[season][rarity][cardIndex].owned);
                break;
            }
        }
    }
}

// 카드 UI 업데이트 함수
function updateCardUI(cardId, isOwned) {
    const cardElement = document.querySelector(`.card[data-card-id="${cardId}"]`);
    if (cardElement) {
        if (isOwned) {
            cardElement.classList.remove('not-owned');
            cardElement.classList.add('owned');
        } else {
            cardElement.classList.remove('owned');
            cardElement.classList.add('not-owned');
        }
    }
}

// 카드 생성 함수 수정 (data-card-id 추가 확인)
function createCardElement(card) {
    return `
        <div class="card ${card.owned ? 'owned' : 'not-owned'}" data-card-id="${card.id}">
            <div class="card-image-container">
                <img src="${card.image}" alt="${card.name}" class="card-image">
            </div>
            <div class="card-text">
                <div class="character-name">${card.character}</div>
                <div class="card-name">${card.name}</div>
            </div>
        </div>
    `;
}