/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  baseStatusFilter, optionFilterBefore, kokoroFit, kokoroFitFilter, selectKokoro, addKokoro, optionKind, selectDamageUp, statusChange, kokoro, selectColor, selectBaseStatus, selectDipsKokoro, selectAllKokoro, filsterDipsKokoro, selectFilterKokoro, optionChange,
} from '../../slices/draque';
import DataSolo from '../../Testdata/DataSolo.json';

const Test:React.FC = () => {
  const [num, setNum] = useState<string>('1');
  const [id, setId] = useState<string>('1');

  const dispatch = useDispatch();
  const color = useSelector(selectColor);
  const baseStatus = useSelector(selectBaseStatus);
  const dispKokoro = useSelector(selectDipsKokoro);
  const allKokoro = useSelector(selectAllKokoro);
  const optionStatus = useSelector(selectDamageUp);
  const filterKooro = useSelector(filsterDipsKokoro);
  const selectFilter = useSelector(selectFilterKokoro);

  const addKokoroDispath = () => {
    const kokoroSolo = DataSolo as kokoro;
    const kokoroSolo2 = {
      ...kokoroSolo,
      name: 'hogehoge',
      cost: 23,
    };
    const hoge = num as kokoroFit;
    const kokoroExtranct = allKokoro[''];
    const addK:selectKokoro = {
      id: hoge,
      kokoro: allKokoro[id],
    };
    const target:selectKokoro = {
      id: hoge,
      kokoro: kokoroSolo2,
    };
    dispatch(addKokoro(addK));
  };

  const testDistpatch = () => {
    // dispatch(orderChange('回復魔力'));
    dispatch(filsterDipsKokoro());
  };
  const testCalc = () => {
    dispatch(statusChange());
  };

  const funcFilter = () => {
    dispatch(filsterDipsKokoro());
  };

  const optionChangeFunc = (e:React.MouseEvent<HTMLElement>) => {
    const y:optionKind = 'イオ呪文アップ';
    dispatch(optionChange(y));
  };
  const optionChangeFunc2 = (i:optionKind) => {
    const y:optionKind = 'イオ呪文アップ';
    dispatch(optionChange(i));
    dispatch(filsterDipsKokoro());
  };

  return (
    <div>
      <input title="hogeoge" value={num} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNum(e.target.value)} />
      <input title="hogeoge" value={id} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setId(e.target.value)} />
      {
        Object.keys(optionStatus).map((i) => (
          <button key={i} type="button" onClick={() => optionChangeFunc2(i as optionKind)}>
            {i}
          </button>
        ))
      }

      <p>
        {
        Object.keys(optionStatus).length
      }
      </p>
      <button type="button" onClick={testDistpatch}>filterResultTest</button>
      <button type="button" onClick={funcFilter}>funcFilter</button>
      <button type="button" onClick={addKokoroDispath}>addKokoroDispath</button>
      <button type="button" onClick={testCalc}>testCalc</button>
      <div>

        {
        (Object.keys(selectFilter) as (keyof selectKokoro)[]).map((i) => (
          <>
            {allKokoro[i].name}
            /
            {allKokoro[i].color}
            <img alt={allKokoro[i].name} src={`${process.env.PUBLIC_URL}/pic/${allKokoro[i].imgpath}`} />
          </>
        ))
      }
      </div>

      <li>
        HP
        {' '}
        {baseStatus.HP}
      </li>
      <li>
        `回復魔力は
        {baseStatus.回復魔力}
        `
      </li>
      <div>
        <li>
          <p>Display Kokoro</p>
          {
          (Object.keys(dispKokoro) as (keyof kokoroFitFilter)[]).map((i) => (
            <div>

              <div>
                <img alt={dispKokoro[i].name} src={`${process.env.PUBLIC_URL}/pic/${dispKokoro[i].imgpath}`} />
              </div>

              <li>{dispKokoro[i].name}</li>
              <li>{dispKokoro[i].color}</li>
              <li>{dispKokoro[i].cost}</li>
              {
                (Object.keys(dispKokoro[i].status) as (keyof baseStatusFilter)[]).map((x) => (
                  <div>
                    <li>
                      {x}
                      :
                      {dispKokoro[i].status[x]}
                    </li>
                  </div>
                ))
              }
            </div>
          ))
        }

        </li>

        <p>test</p>
        {
          (Object.keys(selectFilter) as (keyof selectKokoro)[]).map((i) => (
            <div>
              <img alt={allKokoro[i].name} src={`${process.env.PUBLIC_URL}/pic/${allKokoro[i].imgpath}`} />
              <li>
                name:🌟🌟🌟🌟🌟🌟🌟
                {allKokoro[i].name}
              </li>
              <li>
                color:
                {allKokoro[i].color}
              </li>
              <li>
                回復魔力
                {allKokoro[i].status.回復魔力}
              </li>
              <li>
                ドルマアップ
                {allKokoro[i].option.けもの系アップ}
              </li>
              <li>
                ギラ耐性
                {allKokoro[i].option.斬撃体技アップ}
              </li>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default Test;
