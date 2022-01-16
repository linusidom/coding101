import React, { useState, useEffect } from "react";
import 'react-table/react-table.css';
import ReactTable from 'react-table';

export default function Traininglist() {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch("https://customerrest.herokuapp.com/api/trainings")
            .then(response => response.json())
            .then(data => setTrainings(data.content))
            .catch(err => console.error(err))
    };

    const columns = [
        {
            title: 'Date',
            field: 'date',
        },
        {
            title: 'Duration (min)',
            field: 'duration'
        },
        {
            title: 'Activity',
            field: 'activity'
        },
     ];

    return (
      <div>
         <h1>Trainings</h1>
         <ReactTable filterable={true} data={trainings} columns={columns} />
      </div>
)}