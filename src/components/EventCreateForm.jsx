import React, { useState } from 'react';
import Inputss from './ui/Inputss';
import Buttons from './ui/Buttons';
import CustomSelect from './ui/CustomSelect';
import CustomTextarea from './ui/CustomTextarea';

const EventCreateForm = () => {
    const [eventDate, setEventDate] = useState();
    const [eventTime, setEventTime] = useState();
    const [eventDescription, setEventDescription] = useState();
    const [csvFile, setCsvFile] = useState(null);
    const [selectedLabTemplate, setSelectedLabTemplate] = useState('');
    const [numLabEnvironments, setNumLabEnvironments] = useState(1);
    const [leadTime, setLeadTime] = useState(2);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Event created!');
        alert(JSON.stringify({
            eventDate:eventDate,
            eventTime:eventTime,
            eventDescription:eventDescription,
            csvFile:csvFile,
            selectedLabTemplate:selectedLabTemplate,
            numLabEnvironments:numLabEnvironments,
            leadTime:leadTime
        }))
    };

    const handleDateChange = (event) => {
        setEventDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setEventTime(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setEventDescription(event.target.value);
    };

    const handleCsvFileChange = (event) => {
        setCsvFile(event.target.files[0]);
    };

    const handleLabTemplateChange = (event) => {
        setSelectedLabTemplate(event.target.value);
    };

    const handleNumLabEnvironmentsChange = (event) => {
        setNumLabEnvironments(event.target.value);
    };

    const handleLeadTimeChange = (event) => {
        setLeadTime(event.target.value);
    };

    const optionValues =[
        { value: 'template1', label: 'Template 1' },
        { value: 'template2', label: 'Template 2' },
    ]
    return (
        <form 
        className='p-4 bg-slate-500 rounded-lg flex flex-col gap-3'
        onSubmit={handleSubmit}>
            <div className='text-lg text-white font-medium text-center'>Create New Event</div>
            <Inputss placeholder='Date' type="date" value={eventDate} onChange={handleDateChange} />
            <Inputss placeholder='Time' type="time" value={eventTime} onChange={handleTimeChange} />
            <CustomTextarea
                value={eventDescription}
                onChange={handleDescriptionChange}
                placeholder="Description:"
            />
            <Inputss placeholder='Upload CSV file:' type="file" onChange={handleCsvFileChange} />
            <CustomSelect
                placeholder="Select"
                value={selectedLabTemplate}
                onChange={handleLabTemplateChange}
                options={optionValues}
            />
            <hr/>
            <Inputss placeholder="Number of Lab Environments" type="number" value={numLabEnvironments} onChange={handleNumLabEnvironmentsChange} />
            <Inputss placeholder='Lead Time (hours):' type="time" value={leadTime} onChange={handleLeadTimeChange} />
            <Buttons type="submit">Create Event</Buttons>
            
        </form>
    );
};

export default EventCreateForm;
