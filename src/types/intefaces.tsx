import { ButtonProps } from "@mui/material";
import React from "react";

export interface IDarkBtnProps  extends ButtonProps{
  children: string | React.ReactNode;
  setState?: React.Dispatch<React.SetStateAction<boolean>>;
}

type TSubMenu = {
  text: string;
  link: string;
};

export interface ICusManuProps {
  titleMenu: string;
  subMenuArray: TSubMenu[];
}
export interface INavbarMenuProps {
  NavBarMenuArr: {
    title: string;
    icon?: React.ReactNode;
    link?: string;
    textTitle?: string;
    placeholder?: string;
  }[];
  id: number;
  fontSize: string;
  HandlerBtn?: (a: string, f: number, b: string, c?: boolean) => void;
  ActiveLink?: (link: string) => void;
  isFlight?: boolean;
  StateID?: number;
}
export interface ITitleSectionProps {
  mainTitle: string;
  subTitle?: string;
  isSubTitle: boolean;
  isSeeAll?: boolean;
}
export interface IBestFoodsCardProps {
  name: string;
  image: string;
}
export interface IDistinationCardProps {
  name: string;
  Image: string;
  item: number;
  title: string;
}
export interface ITourWaysCardProps {
  disc: string;
  score: number;
  price?: number;
  Image: string;
  isDetails?: boolean;
  link?: string;
}

export interface IMoreExploreCardProps {
  Image: string;
  disc: string;
}

interface IdataNextTrip {
  Image: string;
  title: string;
}

export type IPorpsNextTrip = {
  dataNextTripArr: IdataNextTrip[];
  mainTitle?: string;
};

export interface IPlanCardProps {
  icon: React.ReactNode;
  title: string;
  disc: string;
}

export interface IMainCardsRestaurant {
  logo: string;
  title: string;
  disc: string;
}
export interface IMainBannerProps {
  children: React.ReactNode;
  bannerUrl: string;
}
export interface ICardTopDistinationProps {
  Image: string;
  title: string;
  diec: string;
}

export interface IReviewsCardProps {
  title: string;
  score: number;
  link: string;
  profile: string;
  comment: string;
  topRateIn: string;
}
export interface IParagraphProps {
  header: string;
  textBody: string;
}
export interface ICardRentalProps {
  TopCover: string;
  textBody: string;
}
export interface ICardSingleTextProps {
  TopCover: string;
  textBody: string;
  heightCard?: string;
  link?: string;
}

export interface ITravelerBoxProps {
  BoxRef: React.RefObject<HTMLDivElement> | null
}

export interface IRangeOfPeopleProps {
  range: string;
  age: string;
}
export interface IBtnMenusProps {
  icon: React.ReactNode;
  textOnBtn: string;
  isWhereToInp: boolean;
  children: React.ReactNode;
}

export interface ICardDetailsProps {
  coverImg: string;
  title: string;
  disc: string;
}

export interface ICardDealsProps {
  beforeDisCount: number;
  AfterDisCount: number;
  nameShip: string;
  date: string;
  departs: string;
  countDay: number;
  distination: string;
}

export interface ICardWhiteBottomProps {
  coverImg: string;
  name: string;
  link: string;
}
export interface IListOfForumProps {
  title: string;
  DataArrListFormus: { text: string; link: string }[];
}

export interface IPopularFourmsCardProps {
  name: string;
  numberTopics: number;
  coverImg: string;
}

export interface ITabItemCompProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

export interface IInpsForAddProps {
  label: string;
  isOptional: boolean;
  isSelectBox: boolean;
  icon?: React.ReactNode;
  position: "end" | "start";
  isIcon: boolean;
  setIsOpenNewAddressBox?: React.Dispatch<React.SetStateAction<boolean>> | null;
}

export interface IBoxOfHeaderProps {
  icon: React.ReactNode;
  text: string;
}
export interface IStartAndBuildCardProps {
  title: string;
  cover: string;
  disc: string;
  textBtn: string;
  colorBack: string;
  colorBtn: {
    colorText: string;
    colorBack: string;
  };
}

export interface ICardInsideText {
  cover: string;
  text: string;
  link: string;
  isBigImage?: boolean;
}

export interface ICardTextFooterProps {
  subTitle: string;
  title: string;
  Image: string;
  link: string;
}
export interface ITitleCenterProps {
  isSubTitle: boolean;
  title: string;
  subTitle?: string;
}

export interface IBadgeBoxesProps {
  bgColor?: string;
  text: string;
  icon: React.ReactNode;
}

export interface ICardCommentProps {
  CommentBody: string;
  email: string;
  profile: string;
  date: string;
}

export interface ICardRightSideImgProps {
  cover: string;
  title: string;
  number: number;
  location: string;
  review: string;
  disc: string;
  link: string;
  badgeDetails: {
    icon: React.ReactNode;
    title: string;
  }[];
}

export interface IBoxOfArticleProps {
  title: string;
  topic: string;
  AverageTemp: { min: number; max: number };
  coverArticle: string;
  TextArticle: {
    text: string;
  }[];
}

export interface ICardSliderProps {
  title?: string;
  count?: number;
  coverImg: string;
  isMainImg: boolean;
}

export interface ReviewBoxProps {
  profile: string;
  name: string;
  countContributions: number;
  likeCount: number;
  title: string;
  date: string;
  typeOfFamilly: string;
  reviewBody: string;
}

export interface ICardNearByProps {
  titleCard: string;
  countOfLike: number;
  coverCard: string;
  linkCard: string;
  mileAway: number;
}

export interface IOperatorCardProps {
  name: string;
  profile: string;
  countContributions: number;
  title: string;
  mainText: string;
  date: string;
}

export interface ICardHeaderSliderProps {
  link: string;
  title: string;
  conutOfLike: number;
  footerCard: string;
  isYellowSeeWay?: boolean;
  CountOfExperience?: number;
  isExtraDisc?: boolean;
  TextExtraDisc?: string;
  cover: {
    id: number;
    imgSrc: string;
  }[];
}

export interface IwhenToVisitCardProps {
  temperature: number;
  monthName: string;
  typeOfBusy: "خیلی" | "به طور متوسط" | "کمتر";
  countOfRainDay: number;
  isDetails?: boolean;
  details?: {
    tempDetail: string | "";
    rainDayDetail: string | "";
    busyDetail: string | "";
  };
}

export interface ICardItemProfileFooterProps {
  countOfIem: number;
  title: string;
  writer: string;
  profile: string;
  link: string;
  imgCover: string;
}
export interface ICardFooterDicsProps {
  title: string;
  countLike: number;
  discFooter: string;
  coverCard: string;
  link: string;
}

export interface IReadMoreCardProps {
  link: string;
  coverImg: string;
  titleCard: string;
  disc: string;
}

export interface ITipCardProps {
  name: string;
  tipBody: string;
  profile: string;
}
export interface ITourCardSliderProps {
  imgCover: string[];
  titeCard: string;
  countOfLike: number;
  TourPrice: number;
  typeOfTraveler: "بزرگسالان" | "گروهی";
  hours: string;
  disc: string;
  TypeOfTour: string;
  recommendedPercent: number;
}
export interface ICardYellowBackProps {
  coverCard: string;
  title: string;
  coutOfLike: string;
  TypeOfCard: string;
  CardPrice: number;
}

export interface ICardThreeImgsProps {
  titleOfMainCard: string;
  mileNumber: number;
  imgUrls: { mainImg: string; otherImgs: string[] };
  link: string;
}

export interface ICardSliderReadMore {
  countOfLike: number;
  imgCover: string[];
  textBodyCard: string;
  isComment: boolean;
  category: {
    icon: React.ReactNode;
    text: string;
  }[];
  comment?: {
    profile: string;
    name: string;
    textComment: string;
  };
  titeCard: string;
}

export interface ICardWithReviewAndPlaceProps {
  titleCard: string;
  countOfReviews: number;
  textPlace: string;
  link: string;
  cardCover: string;
}

export interface ICardForFirstTripProps {
  coverImg: string;
  titleImg: string;
  countryName: string;
  changePageHandler: () => void;
}

export interface IMoreDetailsSectionCardProps {
  AboutProperty: string;
  allowed: {
    pet: boolean;
    kid: boolean;
    smoking: boolean;
  };
  items: string[];
}
export interface IMainCardDetailsProps {
  title: string;
  countOfBedroom: number;
  countOfBathroom: number;
  countOfSleeps: number;
  cardSliderImgs: string[];
  moreInformation: IMoreDetailsSectionCardProps;
}

export interface ICardSearchPageProps {
  coverImg: string;
  title: string;
  link: string;
  country: string;
  disc: string;
}

export interface ISearchTitleProps {
  text: string;
  isAddPlaceBtn: boolean;
  isSeeAllBtn: boolean;
}

export interface IForumsSearchCardProps {
  title: string;
  profile: string;
  name: string;
  date: string;
  nameOfForum: string;
  disc: string;
}
export interface IProfileBox {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAchievementBoxProps {
  href: string;
  title: string;
  subTitle: string;
}

export interface TInpsEditProfile {
  labelFrom: string;
  inpDetails: {
    icon?: React.ReactNode;
    placeholder: string;
    value: string;
  };
  isTextArea: boolean;
}

export interface IAutoCompleteItemProps {
  cover?: string;
  name: string;
  country?: string;
  IsNearby: boolean;
}

export interface IMainBlogCardProps {
  cover: string;
  Address: {
    link: string;
    text: string;
  };
  title: string;
  paragrapth: string[];
}

export interface IAddTravlerBox {
  roomState: number;
  adultsState: number;
  BoxRef: React.RefObject<HTMLDivElement>;
  setAdult: React.Dispatch<React.SetStateAction<number>>;
  setRoom: React.Dispatch<React.SetStateAction<number>>;

}
export interface ICommentBodyProps {
  profile: string,
  name: string,
  commentBody: string,
  commentDate: string,
  isReplyComment: boolean;
  replyComment?: {
    profile: string,
    name: string,
    commentBody: string,
    commentDate: string,
  }[]
}
export interface IGuideCardProps {
  cover: string;
  text: string;
  link: string;
  isVisitorNumber: boolean;
  visitorNumber?: number;
}

export interface CardOfTabsProps {
  title: string;
  textBody: string | React.ReactNode;
  isLink: boolean;
  LinkObj?: {
    textLink: string;
    urlLink: string
  }
}