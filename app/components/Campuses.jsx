import React from 'react';
import { Link } from 'react-router-dom';

import AddCampusButton from './AddCampusButton';
import DeleteCampusButton from './DeleteCampusButton';

export default function Campuses(props) {
  return (
    <div>
      <AddCampusButton addCampus={props.addCampus} />
      {
        props.campuses.map(campus => (
          <div key={campus.id}>
            <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
            <DeleteCampusButton campusId={campus.id} deleteCampus={props.deleteCampus} />
          </div>
        ))
      }
    </div>
  );
}
