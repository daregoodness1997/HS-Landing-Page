/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, XIcon } from '@heroicons/react/solid';

const plans = [
  {
    title: 'Starter',
    featured: false,
    description: 'All your essential business finances, taken care of.',
    priceMonthly: 5,
    priceYearly: 56,
    mainFeatures: [
      { id: 1, value: 'Basic invoicing' },
      { id: 2, value: 'Easy to use accounting' },
      { id: 3, value: 'Mutli-accounts' },
    ],
  },
  {
    title: 'Scale',
    featured: true,
    description: 'The best financial services for your thriving business.',
    priceMonthly: 19,
    priceYearly: 220,
    mainFeatures: [
      { id: 1, value: 'Advanced invoicing' },
      { id: 2, value: 'Easy to use accounting' },
      { id: 3, value: 'Mutli-accounts' },
      { id: 4, value: 'Tax planning toolkit' },
      { id: 5, value: 'VAT & VATMOSS filing' },
      { id: 6, value: 'Free bank transfers' },
    ],
  },
  {
    title: 'Growth',
    featured: false,
    description: 'Convenient features to take your business to the next level.',
    priceMonthly: 12,
    priceYearly: 140,
    mainFeatures: [
      { id: 1, value: 'Basic invoicing' },
      { id: 2, value: 'Easy to use accounting' },
      { id: 3, value: 'Mutli-accounts' },
      { id: 4, value: 'Tax planning toolkit' },
    ],
  },
];
const features = [
  {
    title: 'Tax Savings',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Easy to use accounting',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Multi-accounts',
    tiers: [
      { title: 'starter', value: '3 accounts' },
      { title: 'popular', featured: true, value: 'Unlimited accounts' },
      { title: 'intermediate', value: '7 accounts' },
    ],
  },
  {
    title: 'Invoicing',
    tiers: [
      { title: 'starter', value: '3 invoices' },
      { title: 'popular', featured: true, value: 'Unlimited invoices' },
      { title: 'intermediate', value: '10 invoices' },
    ],
  },
  {
    title: 'Exclusive offers',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: '6 months free advisor',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Mobile and web access',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: false },
    ],
  },
];
const perks = [
  {
    title: '24/7 customer support',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Instant notifications',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Budgeting tools',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Digital receipts',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Pots to separate money',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Free bank transfers',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: false },
    ],
  },
  {
    title: 'Business debit card',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const OurPlans = () => {
  return (
    <div className='bg-gray-50'>
      <div className='relative bg-indigo-600'>
        {/* Overlapping background */}
        <div
          aria-hidden='true'
          className='hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block'
        />

        <div className='relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-6xl'>
            <span className='block lg:inline'>Simple pricing,</span>
            <span className='block lg:inline'>no commitment.</span>
          </h1>
          <p className='mt-4 text-xl text-indigo-100'>
            Everything you need, nothing you don't. Pick a plan that best suits
            your business.
          </p>
        </div>

        <h2 className='sr-only'>Plans</h2>

        {/* Toggle */}
        <div className='relative mt-12 flex justify-center sm:mt-16'>
          <div className='bg-indigo-700 p-0.5 rounded-lg flex'>
            <button
              type='button'
              className='relative bg-white py-2 px-6 border-indigo-700 rounded-md shadow-sm text-sm font-medium text-indigo-700 whitespace-nowrap hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10'
            >
              Monthly billing
            </button>
            <button
              type='button'
              className='ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10'
            >
              Yearly billing
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className='relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0'>
          {/* Decorative background */}
          <div
            aria-hidden='true'
            className='hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-700 rounded-tl-lg rounded-tr-lg lg:block'
          />

          <div className='relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3'>
            {plans.map(plan => (
              <div
                key={plan.title}
                className={classNames(
                  plan.featured
                    ? 'bg-white ring-2 ring-indigo-700 shadow-md'
                    : 'bg-indigo-700 lg:bg-transparent',
                  'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
                )}
              >
                <div>
                  <h3
                    className={classNames(
                      plan.featured ? 'text-indigo-600' : 'text-white',
                      'text-sm font-semibold uppercase tracking-wide'
                    )}
                  >
                    {plan.title}
                  </h3>
                  <div className='flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start'>
                    <div className='mt-3 flex items-center'>
                      <p
                        className={classNames(
                          plan.featured ? 'text-indigo-600' : 'text-white',
                          'text-4xl font-extrabold tracking-tight'
                        )}
                      >
                        ${plan.priceMonthly}
                      </p>
                      <div className='ml-4'>
                        <p
                          className={classNames(
                            plan.featured ? 'text-gray-700' : 'text-white',
                            'text-sm'
                          )}
                        >
                          USD / mo
                        </p>
                        <p
                          className={classNames(
                            plan.featured ? 'text-gray-500' : 'text-indigo-200',
                            'text-sm'
                          )}
                        >
                          Billed yearly (${plan.priceYearly})
                        </p>
                      </div>
                    </div>
                    <h4 className='sr-only'>Features</h4>
                    <ul
                      role='list'
                      className={classNames(
                        plan.featured
                          ? 'border-gray-200 divide-gray-200'
                          : 'border-indigo-500 divide-indigo-500 divide-opacity-75',
                        'mt-7 border-t divide-y lg:border-t-0'
                      )}
                    >
                      {plan.mainFeatures.map(mainFeature => (
                        <li
                          key={mainFeature.id}
                          className='py-3 flex items-center'
                        >
                          <CheckIcon
                            className={classNames(
                              plan.featured
                                ? 'text-indigo-500'
                                : 'text-indigo-200',
                              'w-5 h-5 flex-shrink-0'
                            )}
                            aria-hidden='true'
                          />
                          <span
                            className={classNames(
                              plan.featured ? 'text-gray-600' : 'text-white',
                              'ml-3 text-sm font-medium'
                            )}
                          >
                            {mainFeature.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href='#reg'
                      className={classNames(
                        plan.featured
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                          : 'bg-white text-indigo-600 hover:bg-indigo-50',
                        'mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                      )}
                    >
                      Register
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPlans;
