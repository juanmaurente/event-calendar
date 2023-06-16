import './Cell.scss';

interface Props {
	date?: number;
}

const Cell: React.FC<Props> = ({ date }) => {
	return <div className='calendar-cell'>{date}</div>;
};

export default Cell;
