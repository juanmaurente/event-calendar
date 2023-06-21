import './Title.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronRight,
	faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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
		<div className='title-container'>
			<div className='chevron' onClick={handlePrevMonth}>
				<FontAwesomeIcon icon={faChevronLeft as IconProp} />
			</div>
			<h2>{`${month} ${year}`}</h2>

			<div className='chevron' onClick={handleNextMonth}>
				<FontAwesomeIcon icon={faChevronRight as IconProp} />
			</div>
		</div>
	);
};
export default Title;
