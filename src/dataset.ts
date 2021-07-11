const dataset = {
    init: {
        answers: [
            { content: "目的別に探したい！", nextId: "purpose" },
            {
                content: "ホテルのランク別に探したい！",
                nextId: "rank",
            },
        ],
        question: "どのようにホテルをお探ししますか？",
    },
    purpose: {
        answers: [
            { content: "ハネムーンにおすすめのホテル！", nextId: "honeymoon" },
            {
                content: "ファミリーにおすすめのホテル！",
                nextId: "family",
            },
            { content: "立地のいいホテル！", nextId: "location" },
            { content: "とにかく安く宿泊できるホテル！", nextId: "good_deal" },
            { content: "戻る", nextId: "init" },
        ],
        question: "どのようなホテルをお探しですか？",
    },
    rank: {
        answers: [
            { content: "５つ星ホテル！", nextId: "five_stars" },
            { content: "４つ星ホテル！", nextId: "four_stars" },
            { content: "３つ星ホテル！", nextId: "three_stars" },
            { content: "２つ星ホテル！", nextId: "two_stars" },
            { content: "戻る", nextId: "init" },
        ],
        question: "どのようなランクのホテルをお探しですか？",
    },
    honeymoon: {
        answers: [
            {
                content: "天国のようなホテル！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00013.aspx",
            },
            {
                content: "「ワイキキの貴婦人」と呼ばれる老舗ホテル！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00057.aspx",
            },
            {
                content: "ディズニーのキャラクターに祝福されたい！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00822.aspx",
            },
            { content: "戻る", nextId: "purpose" },
        ],
        question: "こんな特徴のホテルがあります",
    },
    family: {
        answers: [
            {
                content: "全室スイートで朝食付きのホテルがいい！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00375.aspx",
            },
            {
                content: "ホテルの施設が充実しているホテル！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00016.aspx",
            },
            {
                content: "コンドミニアムタイプのホテルがいい！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00006.aspx",
            },
            { content: "戻る", nextId: "purpose" },
        ],
        question: "こんな特徴のホテルがあります",
    },
    location: {
        answers: [
            {
                content: "とにかくワイキキの中心！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00056.aspx",
            },
            {
                content: "立地もこだわりたいけど、広い部屋がいい！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00020.aspx",
            },
            {
                content: "立地がよくて、料金もお得なコスパ重視！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00059.aspx",
            },
            { content: "戻る", nextId: "purpose" },
        ],
        question: "こんな特徴のホテルがあります",
    },
    good_deal: {
        answers: [
            {
                content: "ショッピングに便利なホテル！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00001.aspx",
            },
            {
                content: "料金もお得で朝食付きのホテルがいい！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00420.aspx",
            },
            {
                content: "料金重視だけど、立地にもこだわりたい！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00037.aspx",
            },
            { content: "最初の質問に戻る", nextId: "init" },
        ],
        question: "こんな特徴のホテルがあります",
    },
    five_stars: {
        answers: [
            {
                content: "天国のようなホテル！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00013.aspx",
            },
            {
                content: "オアフ島最古の由緒ある白亜のホテル！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00057.aspx",
            },
            {
                content: "キッチンが付いてるホテルがいい！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00749.aspx",
            },
            { content: "戻る", nextId: "rank" },
        ],
        question: "こんな特徴のホテルがあります",
    },
    four_stars: {
        answers: [
            {
                content: "海の見える新しいホテルがいい！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00877.aspx",
            },
            {
                content: "オンザビーチの広い部屋のホテルがいい！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00020.aspx",
            },
            {
                content: "プールがたくさんあるホテルがいい！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00016.aspx",
            },
            { content: "戻る", nextId: "rank" },
        ],
        question: "こんな特徴のホテルがあります",
    },
    three_stars: {
        answers: [
            {
                content: "改装したてのキレイなホテル！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00059.aspx",
            },
            {
                content: "ワイキキビーチへすぐアクセスできるホテル！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00048.aspx",
            },
            {
                content: "SNS映え抜群、おしゃれなホテルがいい！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00867.aspx",
            },
            { content: "戻る", nextId: "rank" },
        ],
        question: "こんな特徴のホテルがあります",
    },
    two_stars: {
        answers: [
            {
                content: "ショッピングに便利なホテルがいい！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00001.aspx",
            },
            {
                content: "朝食付きのホテルがいい！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00420.aspx",
            },
            {
                content: "2つ星でも、立地にこだわりたい！",
                nextId: "https://hotels.his-j.com/HotelDetail/HNL00037.aspx",
            },
            { content: "戻る", nextId: "rank" },
        ],
        question: "こんな特徴のホテルがあります",
    },
};

export default dataset;
