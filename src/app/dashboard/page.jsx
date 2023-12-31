'use client'

import Image from 'next/image'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { XIcon, CalendarIcon, BellIcon, MagnifyingGlassIcon, ChevronDownIcon, FilterIcon } from '@/components/Icons/generalIcons'
import EmmaDorsey from 'src/images/team/emma-dorsey.jpg';

const months = [
    {
        name: 'January',
        days: [
            { date: '2021-12-27' },
            { date: '2021-12-28' },
            { date: '2021-12-29' },
            { date: '2021-12-30' },
            { date: '2021-12-31' },
            { date: '2022-01-01', isCurrentMonth: true },
            { date: '2022-01-02', isCurrentMonth: true },
            { date: '2022-01-03', isCurrentMonth: true },
            { date: '2022-01-04', isCurrentMonth: true },
            { date: '2022-01-05', isCurrentMonth: true },
            { date: '2022-01-06', isCurrentMonth: true },
            { date: '2022-01-07', isCurrentMonth: true },
            { date: '2022-01-08', isCurrentMonth: true },
            { date: '2022-01-09', isCurrentMonth: true },
            { date: '2022-01-10', isCurrentMonth: true },
            { date: '2022-01-11', isCurrentMonth: true },
            { date: '2022-01-12', isCurrentMonth: true, isToday: true },
            { date: '2022-01-13', isCurrentMonth: true },
            { date: '2022-01-14', isCurrentMonth: true },
            { date: '2022-01-15', isCurrentMonth: true },
            { date: '2022-01-16', isCurrentMonth: true },
            { date: '2022-01-17', isCurrentMonth: true },
            { date: '2022-01-18', isCurrentMonth: true },
            { date: '2022-01-19', isCurrentMonth: true },
            { date: '2022-01-20', isCurrentMonth: true },
            { date: '2022-01-21', isCurrentMonth: true },
            { date: '2022-01-22', isCurrentMonth: true },
            { date: '2022-01-23', isCurrentMonth: true },
            { date: '2022-01-24', isCurrentMonth: true },
            { date: '2022-01-25', isCurrentMonth: true },
            { date: '2022-01-26', isCurrentMonth: true },
            { date: '2022-01-27', isCurrentMonth: true },
            { date: '2022-01-28', isCurrentMonth: true },
            { date: '2022-01-29', isCurrentMonth: true },
            { date: '2022-01-30', isCurrentMonth: true },
            { date: '2022-01-31', isCurrentMonth: true },
            { date: '2022-02-01' },
            { date: '2022-02-02' },
            { date: '2022-02-03' },
            { date: '2022-02-04' },
            { date: '2022-02-05' },
            { date: '2022-02-06' },
        ],
    },
]

function Calendar() {
    return (
        <>
            <div className="relative grid grid-cols-1 gap-x-14 md:grid-cols-1">
                <button
                    type="button"
                    className="absolute -left-1.5 -top-1 flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                >
                    <span className="sr-only">Previous month</span>
                    <XIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                    type="button"
                    className="absolute -right-1.5 -top-1 flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                >
                    <span className="sr-only">Next month</span>
                    <XIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                {months.map((month, monthIdx) => (
                    <section
                        key={monthIdx}
                        className={classNames(monthIdx === months.length - 1 && 'hidden md:block', 'text-center')}
                    >
                        <h2 className="text-sm font-semibold text-gray-900">{month.name}</h2>
                        <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                            <div>M</div>
                            <div>T</div>
                            <div>W</div>
                            <div>T</div>
                            <div>F</div>
                            <div>S</div>
                            <div>S</div>
                        </div>
                        <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                            {month.days.map((day, dayIdx) => (
                                <button
                                    key={day.date}
                                    type="button"
                                    className={classNames(
                                        day.isCurrentMonth ? 'bg-white text-gray-900' : 'bg-gray-50 text-gray-400',
                                        dayIdx === 0 && 'rounded-tl-lg',
                                        dayIdx === 6 && 'rounded-tr-lg',
                                        dayIdx === month.days.length - 7 && 'rounded-bl-lg',
                                        dayIdx === month.days.length - 1 && 'rounded-br-lg',
                                        'relative py-1.5 hover:bg-gray-100 focus:z-10'
                                    )}
                                >
                                    <time
                                        dateTime={day.date}
                                        className={classNames(
                                            day.isToday && 'bg-indigo-600 font-semibold text-white',
                                            'mx-auto flex h-7 w-7 items-center justify-center rounded-full'
                                        )}
                                    >
                                        {day.date.split('-').pop().replace(/^0/, '')}
                                    </time>
                                </button>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
            <section className="mt-12">
                <h2 className="text-base font-semibold leading-6 text-gray-900">Upcoming events</h2>
                <ol className="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
                    <li className="py-4 sm:flex">
                        <time dateTime="2022-01-17" className="w-28 flex-none">
                            Wed, Jan 12
                        </time>
                        <p className="mt-2 flex-auto sm:mt-0">Nothing on today’s schedule</p>
                    </li>
                    <li className="py-4 sm:flex">
                        <time dateTime="2022-01-19" className="w-28 flex-none">
                            Thu, Jan 13
                        </time>
                        <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">View house with real estate agent</p>
                        <p className="flex-none sm:ml-6">
                            <time dateTime="2022-01-13T14:30">2:30 PM</time> - <time dateTime="2022-01-13T16:30">4:30 PM</time>
                        </p>
                    </li>
                    <li className="py-4 sm:flex">
                        <time dateTime="2022-01-20" className="w-28 flex-none">
                            Fri, Jan 14
                        </time>
                        <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">Meeting with bank manager</p>
                        <p className="flex-none sm:ml-6">All day</p>
                    </li>
                    <li className="py-4 sm:flex">
                        <time dateTime="2022-01-18" className="w-28 flex-none">
                            Mon, Jan 17
                        </time>
                        <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">Sign paperwork at lawyers</p>
                        <p className="flex-none sm:ml-6">
                            <time dateTime="2022-01-17T10:00">10:00 AM</time> - <time dateTime="2022-01-17T10:15">10:15 AM</time>
                        </p>
                    </li>
                </ol>
            </section>
        </>
    )
}

function Activity() {
    const [selected, setSelected] = useState(moods[5])
    return (
        <>
            <div className="lg:col-start-3">
                <h2 className="text-sm font-semibold leading-6 text-gray-900">Activity</h2>
                <ul role="list" className="mt-6 space-y-6">
                    {activity.map((activityItem, activityItemIdx) => (
                        <li key={activityItem.id} className="relative flex gap-x-4">
                            <div
                                className={classNames(
                                    activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6',
                                    'absolute left-0 top-0 flex w-6 justify-center'
                                )}
                            >
                                <div className="w-px bg-gray-200" />
                            </div>
                            {activityItem.type === 'commented' ? (
                                <>
                                    <img
                                        src={activityItem.person.imageUrl}
                                        alt=""
                                        className="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50"
                                    />
                                    <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                                        <div className="flex justify-between gap-x-4">
                                            <div className="py-0.5 text-xs leading-5 text-gray-500">
                                                <span className="font-medium text-gray-900">{activityItem.person.name}</span> Campaign Update
                                            </div>
                                            <time
                                                dateTime={activityItem.dateTime}
                                                className="flex-none py-0.5 text-xs leading-5 text-gray-500"
                                            >
                                                {activityItem.date}
                                            </time>
                                        </div>
                                        <p className="text-xs leading-6 text-gray-500">{activityItem.comment}</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                        {activityItem.type === 'paid' ? (
                                            <XIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                                        ) : (
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                                        )}
                                    </div>
                                    <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                                        <span className="font-medium text-gray-900">{activityItem.person.name}</span>{' '}
                                        {activityItem.type}
                                    </p>
                                    <time
                                        dateTime={activityItem.dateTime}
                                        className="flex-none py-0.5 text-xs leading-5 text-gray-500"
                                    >
                                        {activityItem.date}
                                    </time>
                                </>
                            )}
                        </li>
                    ))}
                </ul>

                {/* New comment form */}
                <div className="mt-6 flex gap-x-3">
                    <Image
                        src={EmmaDorsey}
                        alt=""
                        className="h-6 w-6 flex-none rounded-full bg-gray-50"
                    />
                    <form action="#" className="relative flex-auto">
                        <div className="overflow-hidden rounded-lg pb-12 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                            <label htmlFor="comment" className="sr-only">
                                Update Campaign
                            </label>
                            <textarea
                                rows={2}
                                name="comment"
                                id="comment"
                                className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-xs sm:leading-6"
                                placeholder="Update Campaign.."
                                defaultValue={''}
                            />
                        </div>

                        <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                            <div className="flex items-center space-x-5">
                                <div className="flex items-center">
                                    <button
                                        type="button"
                                        className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                                    >
                                        <DocumentIcon className="h-5 w-5" aria-hidden="true" />
                                        <span className="sr-only">Attach a file</span>
                                    </button>
                                </div>
                                <div className="flex items-center">
                                    <Listbox value={selected} onChange={setSelected}>
                                        {({ open }) => (
                                            <>
                                                <Listbox.Label className="sr-only">Your mood</Listbox.Label>
                                                <div className="relative">
                                                    <Listbox.Button className="relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                                                        <span className="flex items-center justify-center">
                                                            {selected.value === null ? (
                                                                <span>
                                                                    <XIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                                                                    <span className="sr-only">Add Category Tag</span>
                                                                </span>
                                                            ) : (
                                                                <span>
                                                                    <span
                                                                        className={classNames(
                                                                            selected.bgColor,
                                                                            'flex h-8 w-8 items-center justify-center rounded-full'
                                                                        )}
                                                                    >
                                                                        <XIcon
                                                                            className="h-5 w-5 flex-shrink-0 text-white"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                    <span className="sr-only">{selected.name}</span>
                                                                </span>
                                                            )}
                                                        </span>
                                                    </Listbox.Button>

                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
                                                        leave="transition ease-in duration-100"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Listbox.Options className="absolute z-10 -ml-6 mt-1 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                                                            {moods.map((mood) => (
                                                                <Listbox.Option
                                                                    key={mood.value}
                                                                    className={({ active }) =>
                                                                        classNames(
                                                                            active ? 'bg-gray-100' : 'bg-white',
                                                                            'relative cursor-default select-none px-3 py-2'
                                                                        )
                                                                    }
                                                                    value={mood}
                                                                >
                                                                    <div className="flex items-center">
                                                                        <div
                                                                            className={classNames(
                                                                                mood.bgColor,
                                                                                'flex h-8 w-8 items-center justify-center rounded-full'
                                                                            )}
                                                                        >
                                                                            <XIcon
                                                                                className={classNames(mood.iconColor, 'h-5 w-5 flex-shrink-0')}
                                                                                aria-hidden="true"
                                                                            />
                                                                        </div>
                                                                        <span className="ml-3 block truncate font-medium">{mood.name}</span>
                                                                    </div>
                                                                </Listbox.Option>
                                                            ))}
                                                        </Listbox.Options>
                                                    </Transition>
                                                </div>
                                            </>
                                        )}
                                    </Listbox>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

function DocumentIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
    );
}

const invoice = {
    subTotal: '$8,800.00',
    tax: '$1,760.00',
    total: '$10,560.00',
    items: [
        {
            id: 1,
            title: 'Logo redesign',
            description: 'New logo and digital asset playbook.',
            hours: '20.0',
            rate: '$100.00',
            price: '$2,000.00',
        },
        {
            id: 2,
            title: 'Website redesign',
            description: 'Design and program new company website.',
            hours: '52.0',
            rate: '$100.00',
            price: '$5,200.00',
        },
        {
            id: 3,
            title: 'Business cards',
            description: 'Design and production of 3.5" x 2.0" business cards.',
            hours: '12.0',
            rate: '$100.00',
            price: '$1,200.00',
        },
        {
            id: 4,
            title: 'T-shirt design',
            description: 'Three t-shirt design concepts.',
            hours: '4.0',
            rate: '$100.00',
            price: '$400.00',
        },
    ],
}

const activity = [
    { id: 1, type: 'Quest Started for Bridural', person: { name: 'Eldrin the Wise' }, date: '7d ago', dateTime: '2023-01-23T10:32' },
    { id: 2, type: 'Found Treasure at Bridural', person: { name: 'Lara Swiftfoot' }, date: '6d ago', dateTime: '2023-01-23T11:03' },
    { id: 3, type: 'Battle Won at mountain top', person: { name: 'Gorath the Brave' }, date: '6d ago', dateTime: '2023-01-23T11:24' },
    {
        id: 4,
        type: 'commented',
        person: {
            name: 'Chelsea Hagon',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        comment: 'Called client, they reassured me the invoice would be paid by the 25th.',
        date: '3d ago',
        dateTime: '2023-01-23T15:56',
    },
    { id: 5, type: 'viewed', person: { name: 'Alex Curren' }, date: '2d ago', dateTime: '2023-01-24T09:12' },
    { id: 6, type: 'paid', person: { name: 'Alex Curren' }, date: '1d ago', dateTime: '2023-01-24T09:20' },
]

const moods = [
    { name: 'Excited', value: 'excited', icon: XIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
    { name: 'Loved', value: 'loved', icon: XIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
    { name: 'Happy', value: 'happy', icon: XIcon, iconColor: 'text-white', bgColor: 'bg-green-400' },
    { name: 'Sad', value: 'sad', icon: XIcon, XIcon: 'text-white', bgColor: 'bg-yellow-400' },
    { name: 'Thumbsy', value: 'thumbsy', icon: XIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
    { name: 'I feel nothing', value: null, icon: XIcon, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const items = [
    {
        title: 'Create a List',
        description: 'Another to-do system you’ll try but eventually give up on.',
        icon: DocumentIcon,
        background: 'bg-pink-500',
    },
    {
        title: 'Create a Calendar',
        description: 'Stay on top of your deadlines, or don’t — it’s up to you.',
        icon: DocumentIcon,
        background: 'bg-yellow-500',
    },
    {
        title: 'Create a Gallery',
        description: 'Great for mood boards and inspiration.',
        icon: DocumentIcon,
        background: 'bg-green-500',
    },
    {
        title: 'Create a Board',
        description: 'Track tasks in different stages of your project.',
        icon: DocumentIcon,
        background: 'bg-blue-500',
    },
]

function CreateCampaign() {
    return (
        <div>
            <p className="mt-1 text-sm text-gray-500">
                Get started by selecting a template or start from an empty project.
            </p>
            <button
                type="button"
                className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
                    />
                </svg>
                <span className="mt-2 block text-sm font-semibold text-gray-900">Create a campaign</span>
            </button>
            <ul role="list" className="mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-2">
                {items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flow-root">
                        <div className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
                            <div
                                className={classNames(
                                    item.background,
                                    'flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg'
                                )}
                            >
                                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">
                                    <a href="#" className="focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        <span>{item.title}</span>
                                        <span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-4 flex">
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Or start from an empty project
                    <span aria-hidden="true"> &rarr;</span>
                </a>
            </div>
        </div>
    )
}

const tabs = [
    { name: 'Recent Activity', href: '#', icon: BellIcon, current: true },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
];

function Tabs() {
    const [currentTab, setCurrentTab] = useState(tabs[0].name);

    const handleTabClick = (tabName) => {
        setCurrentTab(tabName);
    };

    return (
        <div>
            <div className="border-b border-gray-200 overflow-x-auto mb-4">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs" style={{ whiteSpace: 'nowrap' }}>
                    {tabs.map((tab) => (
                        <a
                            key={tab.name}
                            href={tab.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleTabClick(tab.name);
                            }}
                            className={`group inline-flex items-center border-b-2 py-2 px-1 text-xs font-medium transition duration-300 ease-in-out ${currentTab === tab.name
                                ? 'border-indigo-500 text-indigo-600'
                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                }`}
                            aria-current={currentTab === tab.name ? 'page' : undefined}
                        >
                            <tab.icon
                                className={`h-4 w-4 mr-2 ${currentTab === tab.name ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'
                                    }`}
                                aria-hidden="true"
                            />
                            <span>{tab.name}</span>
                        </a>
                    ))}
                </nav>
            </div>

            {currentTab === 'Calendar' && <Calendar />}
            {currentTab === 'Recent Activity' && <Activity />}
        </div>
    );
}

const people = [
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        href: '#',
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        href: '#',
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        href: '#',
    },
]

export default function Example() {
    return (
        <>
                <header className="relative isolate">
                    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
                        <div className="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
                            <div
                                className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
                                style={{
                                    clipPath:
                                        'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
                                }}
                            />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gray-200" />
                    </div>

                    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                        <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
                            <div className="flex items-center gap-x-6">
                                <Image
                                    src={EmmaDorsey}
                                    alt=""
                                    className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"
                                />
                                <h1>
                                    <div className="text-xs text-gray-500">
                                        Welcome Back,
                                    </div>
                                    <div className="text-lg font-semibold text-gray-900">Narco_Boy</div>
                                </h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {/* Invoice summary */}
                        <div className="lg:col-start-3 lg:row-end-1">
                            <Tabs />
                        </div>
                        <div className="-mx-4 px-4 font-display py-8 shadow-sm ring-1 ring-gray-900/5 sm:rounded-2xl sm:pr-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2">
                            <h2 className="font-display font-semibold leading-6 mb-4 text-gray-900">Joined Campaigns</h2>
                            <div className="grid grid-cols-2 space-x-2 mb-10">
                            <div className="relative mb-2 overflow-hidden rounded-2xl shadow-lg bg-[radial-gradient(#2C313D_35%,#000)]">
                                <dl className="flex flex-wrap">
                                    <div className="flex-auto pl-6 pt-6">
                                        <dd className="mt-1 text-sm font-display leading-6 text-white">The light of Bridural</dd>
                                    </div>
                                    <div className="flex-none self-end px-6 pt-4">
                                        <dt className="sr-only">Campaign Status</dt>
                                        <dd className="rounded-md inline-flex items-center bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/10">
                                            Active
                                        </dd>
                                    </div>
                                    <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                                        <dt className="flex-none">
                                            <span className="sr-only">People in Campaign</span>
                                       
                                        </dt>
                                    </div>
                                </dl>
                                <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                                    <a href="#" className="text-sm font-display font-semibold leading-6 text-white">
                                        Continue Campaign <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                            <div className="relative mb-2 overflow-hidden rounded-2xl shadow-lg bg-[radial-gradient(#2C313D_35%,#000)]">
                                <dl className="flex flex-wrap">
                                    <div className="flex-auto pl-6 pt-6">
                                        <dd className="mt-1 text-sm font-display leading-6 text-white">Necromancer at night</dd>
                                    </div>
                                    <div className="flex-none self-end px-6 pt-4">
                                        <dt className="sr-only">Campaign Status</dt>
                                        <dd className="rounded-md inline-flex items-center bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/10">
                                            Active
                                        </dd>
                                    </div>
                                    <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                                        <dt className="flex-none">
                                            <span className="sr-only">People in Campaign</span>
                               
                                        </dt>
                                    </div>
                                </dl>
                                <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                                    <a href="#" className="text-sm font-display font-semibold leading-6 text-white">
                                        Continue Campaign <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                            </div>
                            <div>
                                <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
                                    <h3 className="font-display font-semibold leading-6 text-gray-900">Active Characters</h3>
                                    <div className="mt-3 sm:ml-4 sm:mt-0">
                                        <label htmlFor="mobile-search-candidate" className="sr-only">
                                            Filter
                                        </label>
                                        <label htmlFor="desktop-search-candidate" className="sr-only">
                                            Filter
                                        </label>
                                        <div className="flex rounded-md shadow-sm">
                                            <div className="relative flex-grow focus-within:z-10">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                    <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                                                </div>
                                                <input
                                                    type="text"
                                                    name="mobile-search-candidate"
                                                    id="mobile-search-candidate"
                                                    className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:hidden"
                                                    placeholder="Search"
                                                />
                                                <input
                                                    type="text"
                                                    name="desktop-search-candidate"
                                                    id="desktop-search-candidate"
                                                    className="hidden w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-xs leading-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:block"
                                                    placeholder="Search Characters"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                className="relative -ml-px font-display inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-1.5 text-xs text-gray-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                            >
                                                <FilterIcon className="-ml-0.5 h-4 w-4 text-gray-400" aria-hidden="true" />
                                                Filter
                                                <ChevronDownIcon className="-mr-1 h-4 w-4 text-gray-400" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <ul role="list" className="divide-y divide-gray-100">
                                    {people.map((person) => (
                                        <li key={person.email} className="flex items-center justify-between gap-x-6 py-5">
                                            <div className="flex min-w-0 gap-x-4">
                                                <Image className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                                                </div>
                                            </div>
                                            <a
                                                href={person.href}
                                                className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                            >
                                                View
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="#"
                                    className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                                >
                                    View all
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>

        </>
    )
}
