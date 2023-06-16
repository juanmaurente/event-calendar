import './Title.scss';

interface Props {
	month: string;
	year: number;
	handlePrevMonth: () => void;
	handleNextMonth: () => void;
}

const Title: React.FC<Props> = ({
	month,
	year,
	handlePrevMonth,
	handleNextMonth,
}) => {
	return (
		<div className='calendar-title'>
			<div className='chevron' onClick={handlePrevMonth}>
				&lt;
			</div>
			<h2>{`${month} ${year}`}</h2>
			<div className='chevron' onClick={handleNextMonth}>
				&gt;
			</div>
		</div>
	);
};
export default Title;
