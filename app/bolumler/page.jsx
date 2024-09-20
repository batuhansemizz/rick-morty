import moment from "moment";
import Link from "next/link";
import React from "react";
import 'moment/locale/tr'

import { BsFillCalendarCheckFill, BsFillCalendar2EventFill } from 'react-icons/bs';
import { resolve } from "styled-jsx/css";

async function getBolumler() {

  
  const res = await fetch("https://rickandmortyapi.com/api/episode");
  return res.json();


}



export default async function Page() {
  const bolumler = await getBolumler();

  return (
    <div className="repos-container">
      <h3>Rick ve Morty Bölümleri</h3>
      <ul className="episode-list">
        {bolumler.results.map((bolum) => (
          <li key={bolum.id}>
            <Link href={`/bolumler/${bolum.id}`}>
              <h3>{bolum.name}</h3>
              <p>{bolum.episode}</p>
              <div className="repo-details">
                <span>
                  <BsFillCalendarCheckFill /> {moment(bolum.air_date).format('LL')}
                </span>
                <span>
                  <BsFillCalendar2EventFill /> {moment(bolum.created).format('LL')}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}