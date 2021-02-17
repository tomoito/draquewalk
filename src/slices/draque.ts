/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import DataSolo from '../Testdata/DataSolo.json';
import DoraAll from '../Testdata/dqwalkAll3.json';
import { RootState } from '../stores/store';
import { JobPic, jobCalc, JobFavaritePic } from '../constants/Teisu';

type TypeDoraAll = typeof DoraAll
type TypeDoraSolo = typeof DataSolo;

type PickType<T, K extends keyof T> =T[K];
type PickTypeBase<T, TYPE> ={[P in keyof T]:TYPE}

// 0)心
type typeKokoroBefore<T, type1, type2, type3> = {
  [K in keyof T]:(K extends type1 ?
    Partial<{
    [X in keyof T[K]]?:number
  }>
    :K extends type2 ?
      type3
    :T[K]
    )
}

export type kokoro=typeKokoroBefore<TypeDoraSolo, 'option', 'color', colorKind>

// 1) color
export type colorKind = '赤' | '青' | '紫' | '黄' | '緑'
export type colorFilter = {
    [id in colorKind]:boolean
}

// 2) order
export type orderFilter = keyof PickType<TypeDoraSolo, 'status'> | keyof statusAdd
type statusAdd ={
  攻魔複合:number,
  コスト:number,
}

// 2.1) order
export type orderDestAsc = '昇順' | '降順'

// 3) status
export type baseStatusFilter = PickType<TypeDoraSolo, 'status'>
type baseStatusKind = keyof baseStatusFilter

// 4) option
export type optionKind = keyof optionFilter
export type optionFilterBefore = PickType<TypeDoraSolo, 'option'>
export type optionFilter = PickTypeBase<optionFilterBefore, boolean>

// 5) ジョブ
export type jobFilter = 'バトルマスター' | 'レンジャー' | '賢者' | 'パラディン' | 'スーパースター'| '魔法戦士' | '海賊'

// 6) kokoro 枠
export type kokoroFit = '1' | '2' | '3' | '4'
export type kokoroFitFilter ={
  [id in kokoroFit]:kokoro
}

// 7) ジョブによる演算
export type jobCal ={
  [id in jobFilter]:{
    [kokoros in kokoroFit]:{
      [color in colorKind]:number
    }
  }
}
export type kokoroAllList ={
  [id in string]:kokoro
}
const kokoroList = DoraAll as kokoroAllList;

export type typeJobPic ={
  [id in jobFilter]:{
    [kokoros in kokoroFit]:string
  }
}

export type selectKokoro ={
    id:kokoroFit,
    kokoro:kokoro
}

const initialKokoro:kokoro = {
  id: 1,
  color: '紫',
  name: 'blank',
  cost: 0,
  追加スキル: '',
  imgpath: 'None.png',
  status: {
    HP: 0,
    MP: 0,
    攻撃力: 0,
    守備力: 0,
    攻撃魔法: 0,
    回復魔力: 0,
    きようさ: 0,
    すばやさ: 0,

  },
  option: {},
};

type initialStateType ={
    color:{
        [id in keyof colorFilter]:boolean
    }
    order:orderFilter,
    orderWhich:orderDestAsc,
    skillInclude:boolean,
    option:optionFilter,
    job:jobFilter,
    dispKokoro:{
        [id in kokoroFit]:kokoro
    },
    filterKokoro:{
      [id in string]:kokoro
    },
    filterKokoro2:string[],
    allkokoro:{
        [id in string]:kokoro
    },
    calsBaseStatus:{
      [id in orderFilter ]:number
    },
    calcOptionStatus:{
      [id in optionKind ]:number
    }
}

const initialState:initialStateType = {
  color: {
    紫: false,
    赤: false,
    青: false,
    黄: false,
    緑: false,
  },
  order: 'コスト',
  orderWhich: '降順',
  skillInclude: false,
  option: {
    斬撃アップ: false,
    体技アップ: false,
    斬撃体技アップ: false,
    じゅもんアップ: false,
    ブレスアップ: false,
    会心: false,
    魔力暴走: false,
    メラ属性アップ: false,
    ギラ属性アップ: false,
    ヒャド属性アップ: false,
    バギ属性アップ: false,
    イオ属性アップ: false,
    ドルマ属性アップ: false,
    デイン属性アップ: false,
    ジバリア属性アップ: false,
    メラ特技アップ: false,
    ギラ特技アップ: false,
    ヒャド特技アップ: false,
    バギ特技アップ: false,
    イオ特技アップ: false,
    ドルマ特技アップ: false,
    デイン特技アップ: false,
    ジバリア特技アップ: false,
    メラ呪文アップ: false,
    ギラ呪文アップ: false,
    ヒャド呪文アップ: false,
    バギ呪文アップ: false,
    イオ呪文アップ: false,
    ドルマ呪文アップ: false,
    デイン呪文アップ: false,
    ジバリア呪文アップ: false,
    悪魔系アップ: false,
    エレメント系アップ: false,
    怪人系アップ: false,
    けもの系アップ: false,
    植物系アップ: false,
    スライム系アップ: false,
    ゾンビ系アップ: false,
    ドラゴン系アップ: false,
    鳥系アップ: false,
    物質系アップ: false,
    マシン系アップ: false,
    水系アップ: false,
    虫系アップ: false,
    スキル回復: false,
    とくぎ回復: false,
    じゅもん回復: false,
    どうぐＨＰ回復: false,
    どうぐＭＰ回復: false,
    ガード率: false,
    回避率: false,
    ターン開始時ＨＰ: false,
    ターン開始時ＭＰ: false,
    戦闘終了時ＨＰ: false,
    戦闘終了時ＭＰ: false,
    斬撃減: false,
    体技減: false,
    '斬撃・体技減': false,
    じゅもん減: false,
    ブレス減: false,
    全属性耐性: false,
    メラ耐性: false,
    ギラ耐性: false,
    ヒャド耐性: false,
    バギ耐性: false,
    イオ耐性: false,
    ドルマ耐性: false,
    デイン耐性: false,
    ジバリア耐性: false,
    悪魔系耐性: false,
    エレメント系耐性: false,
    怪人系耐性: false,
    けもの系耐性: false,
    植物系耐性: false,
    スライム系耐性: false,
    ゾンビ系耐性: false,
    ドラゴン系耐性: false,
    鳥系耐性: false,
    物質系耐性: false,
    マシン系耐性: false,
    水系耐性: false,
    虫系耐性: false,
    状態異常耐性アップ: false,
    '（全）休み※': false,
    転び: false,
    踊り: false,
    縛り: false,
    怯え: false,
    眠り: false,
    幻惑: false,
    混乱: false,
    呪い: false,
    麻痺: false,
    毒: false,
    封印: false,
    即死: false,
    魅了: false,
    攻撃減: false,
    防御減: false,
    じゅもん攻撃減: false,
    じゅもん防御減: false,
    すばやさ減: false,
  },
  job: 'バトルマスター',
  dispKokoro: {
    1: { ...initialKokoro, imgpath: JobFavaritePic['バトルマスター']['1'] },
    2: { ...initialKokoro, imgpath: JobFavaritePic['バトルマスター']['2'] },
    3: { ...initialKokoro, imgpath: JobFavaritePic['バトルマスター']['3'] },
    4: { ...initialKokoro, imgpath: JobFavaritePic['バトルマスター']['4'] },
  },
  filterKokoro: {},
  filterKokoro2: [],
  allkokoro: kokoroList,
  calsBaseStatus: {
    HP: 0,
    MP: 0,
    攻撃力: 0,
    守備力: 0,
    攻撃魔法: 0,
    回復魔力: 0,
    すばやさ: 0,
    きようさ: 0,
    攻魔複合: 0,
    コスト: 0,
  },
  calcOptionStatus: {
    斬撃アップ: 0,
    体技アップ: 0,
    斬撃体技アップ: 0,
    じゅもんアップ: 0,
    ブレスアップ: 0,
    会心: 0,
    魔力暴走: 0,
    メラ属性アップ: 0,
    ギラ属性アップ: 0,
    ヒャド属性アップ: 0,
    バギ属性アップ: 0,
    イオ属性アップ: 0,
    ドルマ属性アップ: 0,
    デイン属性アップ: 0,
    ジバリア属性アップ: 0,
    メラ特技アップ: 0,
    ギラ特技アップ: 0,
    ヒャド特技アップ: 0,
    バギ特技アップ: 0,
    イオ特技アップ: 0,
    ドルマ特技アップ: 0,
    デイン特技アップ: 0,
    ジバリア特技アップ: 0,
    メラ呪文アップ: 0,
    ギラ呪文アップ: 0,
    ヒャド呪文アップ: 0,
    バギ呪文アップ: 0,
    イオ呪文アップ: 0,
    ドルマ呪文アップ: 0,
    デイン呪文アップ: 0,
    ジバリア呪文アップ: 0,
    悪魔系アップ: 0,
    エレメント系アップ: 0,
    怪人系アップ: 0,
    けもの系アップ: 0,
    植物系アップ: 0,
    スライム系アップ: 0,
    ゾンビ系アップ: 0,
    ドラゴン系アップ: 0,
    鳥系アップ: 0,
    物質系アップ: 0,
    マシン系アップ: 0,
    水系アップ: 0,
    虫系アップ: 0,
    スキル回復: 0,
    とくぎ回復: 0,
    じゅもん回復: 0,
    どうぐＨＰ回復: 0,
    どうぐＭＰ回復: 0,
    ガード率: 0,
    回避率: 0,
    ターン開始時ＨＰ: 0,
    ターン開始時ＭＰ: 0,
    戦闘終了時ＨＰ: 0,
    戦闘終了時ＭＰ: 0,
    斬撃減: 0,
    体技減: 0,
    '斬撃・体技減': 0,
    じゅもん減: 0,
    ブレス減: 0,
    全属性耐性: 0,
    メラ耐性: 0,
    ギラ耐性: 0,
    ヒャド耐性: 0,
    バギ耐性: 0,
    イオ耐性: 0,
    ドルマ耐性: 0,
    デイン耐性: 0,
    ジバリア耐性: 0,
    悪魔系耐性: 0,
    エレメント系耐性: 0,
    怪人系耐性: 0,
    けもの系耐性: 0,
    植物系耐性: 0,
    スライム系耐性: 0,
    ゾンビ系耐性: 0,
    ドラゴン系耐性: 0,
    鳥系耐性: 0,
    物質系耐性: 0,
    マシン系耐性: 0,
    水系耐性: 0,
    虫系耐性: 0,
    状態異常耐性アップ: 0,
    '（全）休み※': 0,
    転び: 0,
    踊り: 0,
    縛り: 0,
    怯え: 0,
    眠り: 0,
    幻惑: 0,
    混乱: 0,
    呪い: 0,
    麻痺: 0,
    毒: 0,
    封印: 0,
    即死: 0,
    魅了: 0,
    攻撃減: 0,
    防御減: 0,
    じゅもん攻撃減: 0,
    じゅもん防御減: 0,
    すばやさ減: 0,
  },
};

// const SortKokoro=(Target:kokoroAllList)=>{
//   _sortedMovies = Target.sort((a, b) => {
//     a = a[sort.key];
//     b = b[sort.key];

//     if(a === b) {
//       return 0;
//     }
//     if(a > b) {
//       return 1 * sort.order;
//     }
//     if(a < b) {
//       return -1 * sort.order;
//     }
//   });
// }
// return _sortedMovies;
// }

type colorChange = keyof colorFilter

const dqwolkSlice = createSlice({
  name: 'dqwalk',
  initialState,
  reducers: {
    addKokoro: (state, action:PayloadAction<selectKokoro>) => {
      state.dispKokoro[action.payload.id] = action.payload.kokoro;
    },
    colorChange: (state, action:PayloadAction<colorChange>) => {
      state.color[action.payload] = !state.color[action.payload];
    },
    orderChange: (state, action:PayloadAction<orderFilter>) => {
      state.order = action.payload;
    },
    orderChange2: (state, action:PayloadAction<orderDestAsc>) => {
      state.orderWhich = action.payload;
    },
    skillChange: (state) => {
      state.skillInclude = !state.skillInclude;
    },
    optionChange: (state, action:PayloadAction<optionKind>) => {
      state.option[action.payload] = !state.option[action.payload];
    },
    jobChange: (state, action:PayloadAction<jobFilter>) => {
      state.job = action.payload;
      // {JobFavariteTeisu[Job][i]
      // eslint-disable-next-line no-lone-blocks
      {
        (Object.keys(state.dispKokoro) as (keyof kokoroFitFilter)[]).map((i) => (
          state.dispKokoro[i].imgpath = JobFavaritePic[state.job][i]
        ));
      }
    },
    statusChange: (state) => {
      // 現在のkokoroからステータスを再計算する。
      state.calsBaseStatus = { ...initialState.calsBaseStatus };
      state.calcOptionStatus = { ...initialState.calcOptionStatus };

      (Object.keys(state.dispKokoro) as (keyof kokoroFitFilter)[]).map((kokoroNum) => {
        (Object.keys(state.calsBaseStatus) as (keyof baseStatusFilter)[]).map((dmgUp) => {
          const numOffence = state.dispKokoro[kokoroNum].status[dmgUp];
          if (typeof numOffence === 'number') {
            state.calsBaseStatus[dmgUp] += (Math.ceil(numOffence * jobCalc[state.job][kokoroNum][state.dispKokoro[kokoroNum].color]));
          }
        });
        // (Object.keys(state.dispKokoro[kokoroNum].option) as (keyof optionFilter_before)[]).map((resUp) => {
        (Object.keys(state.calcOptionStatus) as (keyof optionFilterBefore)[]).map((resUp) => {
          const numResistance = state.dispKokoro[kokoroNum].option[resUp];

          if (typeof numResistance === 'number') {
            state.calcOptionStatus[resUp] += numResistance;
          }
        });
        state.calsBaseStatus['コスト'] += state.dispKokoro[kokoroNum].cost;
      });
      state.calsBaseStatus['攻魔複合'] = state.calsBaseStatus['攻撃力'] + state.calsBaseStatus['攻撃魔法'];
    },
    resetDispKokoro: (state) => {
      (Object.keys(state.dispKokoro) as (keyof kokoroFitFilter)[]).map((kokoroNum) => {
        // state.dispKokoro[kokoroNum] = {} as kokoro;
        state.dispKokoro[kokoroNum] = initialKokoro;
      });
      state.calsBaseStatus = initialState.calsBaseStatus;
      state.calcOptionStatus = initialState.calcOptionStatus;
    },
    orderResult: (state) => {
      const hoge = state.filterKokoro2.sort((a, b) => {
        const aa = state.order === '攻魔複合' ? state.allkokoro[a].status['攻撃力'] + state.allkokoro[a].status['攻撃魔法'] : state.order === 'コスト' ? state.allkokoro[a].cost : state.allkokoro[a].status[state.order];

        const bb = state.order === '攻魔複合' ? state.allkokoro[b].status['攻撃力'] + state.allkokoro[b].status['攻撃魔法'] : state.order === 'コスト' ? state.allkokoro[b].cost : state.allkokoro[b].status[state.order];
        // const aa = state.order === '攻魔複合' ? state.allkokoro[a].status['攻撃力'] + state.allkokoro[a].status['攻撃魔法'] : state.order === 'コスト' ? : state.allkokoro[a].cost : state.allkokoro[a].status[state.order];

        // const bb = state.order === '攻魔複合' ? state.allkokoro[b].status['攻撃力'] + state.allkokoro[b].status['攻撃魔法'] : state.allkokoro[b].status[state.order];

        if (state.orderWhich === '降順') {
          return aa < bb ? 1 : -1;
        }

        return aa > bb ? 1 : -1;
      });
      state.filterKokoro2 = hoge;
    },
    filsterDipsKokoro: (state) => {
      const colorList = (Object.keys(state.color) as (keyof colorFilter)[]).filter((i) => state.color[i]);
      const colorFiltered = Object.keys(state.allkokoro)
        .filter((i) => colorList.includes(state.allkokoro[i].color));

      // 1-1. offenceup で絞る
      const filterDamageUpList = colorFiltered.filter((i) => {
        const matched = (Object.keys(state.option) as (keyof optionFilter)[]).map((x) => {
          if (state.option[x] === false || state.allkokoro[i].option[x]) {
            return true;
          }

          return false;
        });
        if (matched.length === 1) {
          return matched.includes(true);
        }

        return !matched.includes(false);
      });

      // skill

      const skillInclude = filterDamageUpList.filter((i) => state.skillInclude === false || state.allkokoro[i].追加スキル !== '');

      const result = {} as kokoroAllList;
      // eslint-disable-next-line no-restricted-syntax

      const hoge = skillInclude.sort((a, b) => {
        const aa = state.order === '攻魔複合' ? state.allkokoro[a].status['攻撃力'] + state.allkokoro[a].status['攻撃魔法'] : state.order === 'コスト' ? state.allkokoro[a].cost : state.allkokoro[a].status[state.order];

        const bb = state.order === '攻魔複合' ? state.allkokoro[b].status['攻撃力'] + state.allkokoro[b].status['攻撃魔法'] : state.order === 'コスト' ? state.allkokoro[b].cost : state.allkokoro[b].status[state.order];

        if (state.orderWhich === '降順') {
          return aa < bb ? 1 : -1;
        }

        return aa > bb ? 1 : -1;

        // return 1;
      });
      state.filterKokoro2 = hoge;

      // for (const i of hoge) {
      //   result[i] = state.allkokoro[i];
      // }

      // for (const i of filterDamageUpList) {
      //   result[i] = state.allkokoro[i];
      //   // alert(result[i]);
      // }

      // state.filterKokoro = result;
    },
    filterTest: (state) => {
      const colorList = ['赤'];
      const test1 = (Object.keys(state.allkokoro))
        .filter((index) => colorList.includes(state.allkokoro[index].color));
    },

  },
});

export const {
  addKokoro, colorChange, orderChange, jobChange, statusChange, optionChange, filsterDipsKokoro, resetDispKokoro, orderChange2, orderResult, skillChange,
} = dqwolkSlice.actions;

export const selectJob = (state: RootState) => state.draque.job// eslint-disable-line
export const selectColor = (state: RootState) => state.draque.color// eslint-disable-line
export const selectDamageUp = (state: RootState) => state.draque.option;// eslint-disable-line
export const selectDipsKokoro = (state: RootState) => state.draque.dispKokoro;// eslint-disable-line
export const selectFilterKokoro = (state: RootState) => state.draque.filterKokoro;// eslint-disable-line
export const selectFilterKokoro2 = (state: RootState) => state.draque.filterKokoro2;// eslint-disable-line
export const selectAllKokoro = (state: RootState) => state.draque.allkokoro;// eslint-disable-line
export const selectBaseStatus = (state: RootState) => state.draque.calsBaseStatus// eslint-disable-line
export const selectOffenceStatus = (state: RootState) => state.draque.calcOptionStatus// eslint-disable-line

export default dqwolkSlice.reducer;
