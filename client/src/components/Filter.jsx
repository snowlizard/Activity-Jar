import Select from 'react-select';

export default () => {
    const types = [
        { value: 'Dine out', label: 'Doggy' },
        { value: 'Picnic', label: 'Missionary' },
        { value: 'Indoors', label: 'In the kitchen' },
        { value: 'Trip', label: 'Yumi watching' }
    ];

    return (
        <div className="w-full bg-[var(--kuromi-gray)] p-8 rounded-lg shadow-xl/30">
            <input className="w-full rounded-sm outline-none shadow-xl/30 mb-3 p-2 bg-[#fff]" type="text" placeholder="kuromi self. . ." />
            <Select className="shadow-xl/30" isMulti options={types} />
        </div>
    );
}