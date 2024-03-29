export interface ITranslation {
  t: {
    LogIn?: string;
    onError?: string;
    requiredName?: string;
    requiredPassword?: string;
    successLog?: string;
    LogOut?: string;
    LogOutMessage?: string;
    Language?: string;
    homeTab?: string;
    profileTab?: string;
    logInTitle?: string;
    logo?: string;
    username?: string;
    password?: string;
    email?: string;
    forget?: string;
    click?: string;
    sinUp?: string;
    sinUpTitle?: string;
    greeting?: string;
    OwnNotFound?: string;
    product?: string;
    cart?: string;
    Footer?: string;
    requiredEmail?: string;
    requiredPhone?: string;
    requiredCode?: string;
    requiredAddress?: string;
    requiredCity?: string;
    requiredCountry?: string;
    requiredZip?: string;
    requiredState?: string;
    requiredCardNumber?: string;
    requiredCvv?: string;
    requiredExpiry?: string;
    requiredMessage?: string;
    phone?: string;
    ButForget?: string;
    contactUs?: string;
    desForgot?: string;
    sin?: string;
    for?: string;
    senUpMes?: string;
    articles?: string;
    blogs?: string;
    aboutUs?: string;
    profile?: string;
    contactTitle?: string;
    contactDesc?: string;
    contactName?: string;
    contactEmail?: string;
    contactMessage?: string;
    contactSubmit?: string;
    name?: string;
    age?: string;
    requiredAge?: string;
    gender?: string;
    requiredGender?: string;
    male?: string;
    female?: string;
    weight?: string;
    requiredWeight?: string;
    height?: string;
    requiredHeight?: string;
    save?: string;
    profileTitle?: string;
    profileDesc?: string;
    uploadImage?: string;
    requiredUpload?: string;
    requiredCategory?: string;
    sports?: string;
    running?: string;
    swimming?: string;
    basketball?: string;
    football?: string;
    tennis?: string;
    gym?: string;
    calories?: string;
    services?: string;
    caloriesTitle?: string;
    burn?: string;
    requiredBurn?: string;
    burn1?: string;
    burn2?: string;
    burn3?: string;
    exercise?: string;
    requiredExercise?: string;
    days?: string;
    calculate?: string;
    carbs?: string;
    protein?: string;
    fat?: string;
    totalCalories?: string;
    caloriesMore?: string;
    caloriesLess?: string;
    bodyShape?: string;
    skinny?: string;
    normal?: string;
    overweight?: string;
    firstDegree?: string;
    secondDegree?: string;
    dangerousObesity?: string;
    des1?: string;
    des2?: string;
    des3?: string;
    des4?: string;
    des5?: string;
    des6?: string;
    foodCalories?: string;
    selectFood?: string;
    LogOutMessageModal?: string;
    okText?: string;
    cancelText?: string;
    footer?: string;
    websiteName?: string;
    homePage?: {
      hero?: {
        h1_1: string;
        h1_2: string;
        p: string;
        btn: string;
      };
      about?: {
        advice: string;
        p1: string;
        p2: string;
        btn: string;
      };
      services?: {
        titleH2: string;
        titleH3: string;
        titleH4Box1: string;
        box1Text: string;
        titleH4Box2: string;
        box2Text: string;
        titleH4Box3: string;
        box3Text: string;
        titleH4Box4: string;
        box4Text: string;
      };
      videoSection?: {
        h2: string;
        btn: string;
      };
    };
    aboutPage?: {
      about?: string;
      aboutDescriptionP1?: string;
      aboutDescriptionP2?: string;
      teamSectionTitlePart1?: string;
      teamSectionTitlePart2?: string;
    };
    goal?: string;
    moreCal?: string;
    lessCal?: string;
    stability?: string;
    caloriesStability?: string;
    popupCanceledMessage?: string;
    requiredGoal?: string;
    quantityMess?: string;
  };
}

export enum LangsType {
  ar = 'ar',
  en = 'en'
}
export interface StoreType {
  user: {
    currentUser: null;
    currentLang: LangsType;
  };
}
