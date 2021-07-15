import React from 'react';
import Table from './Table';
import data from '../../data/stats/chess';

const ChessStats = () => (
  <>
    <h3>Some stats about <b>Chess</b></h3>
    <Table data={data} />
  </>
);

export default ChessStats;
