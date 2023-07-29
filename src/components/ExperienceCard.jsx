import PropTypes from 'prop-types';

const ExperienceCard = ({ company, role, date, jobDesc }) => {
  return (
    <div className='w-full dark:text-text text-dark py-8 px-6 flex flex-col gap-3'>
      <div className='w-full flex flex-col md:flex-row justify-between items-start'>
        <div>
          <h2 className='text-lg font-bold text-dark dark:text-white'>
            {company}
          </h2>
          <i>{role}</i>
        </div>
        <p>{date}</p>
      </div>
      <ul className='list-disc pl-6'>
        {jobDesc.map(({ jobId, job }) => {
          return <li key={jobId}>{job}</li>;
        })}
      </ul>
    </div>
  );
};

export default ExperienceCard;

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  jobDesc: PropTypes.array,
};
