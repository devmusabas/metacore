'use client';

import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { buttonVariants } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/client'; // Import Supabase client
import { cn } from '@/lib/utils';

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: { id: string; date: Date; title: string; done?: boolean }[]; // Add 'id' for event identification
};

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  events,
  ...props
}: CalendarProps): JSX.Element {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [eventStates, setEventStates] = React.useState(events);

  const handleDayClick = (day: Date): void => {
    setSelectedDate(day);
  };

  const toggleEventDone = async (index: number): Promise<void> => {
    const supabase = createClient();
    const event = eventStates[index];
    const newDoneStatus = !event.done;

    // Update local state
    setEventStates(
      (
        prevEvents: { id: string; date: Date; title: string; done?: boolean }[]
      ) => {
        const newEvents = [...prevEvents];
        newEvents[index].done = newDoneStatus;
        return newEvents;
      }
    );

    // Update Supabase
    try {
      const { error } = await supabase
        .from('events') // Assuming your table is named 'events'
        .update({ done: newDoneStatus })
        .eq('id', event.id);

      if (error) {
        // console.error('Error updating event status:', error);
        // Optionally revert the local state change if the update fails
        setEventStates(
          (
            prevEvents: {
              id: string;
              date: Date;
              title: string;
              done?: boolean;
            }[]
          ) => {
            const newEvents = [...prevEvents];
            newEvents[index].done = event.done;
            return newEvents;
          }
        );
      }
    } catch (_err) {
      //   console.error('Unexpected error:', err);
    }
  };

  const dayEvents = selectedDate
    ? eventStates.filter(
        (event) => event.date.toDateString() === selectedDate.toDateString()
      )
    : [];

  return (
    <div className="flex flex-col transition-all duration-300 md:flex-row">
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn('p-3', className)}
        classNames={{
          months:
            'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
          month: 'space-y-4',
          caption: 'flex justify-center pt-1 relative items-center',
          caption_label: 'text-sm font-medium',
          nav: 'space-x-1 flex items-center',
          nav_button: cn(
            buttonVariants({ variant: 'outline' }),
            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
          ),
          nav_button_previous: 'absolute left-1',
          nav_button_next: 'absolute right-1',
          table: 'w-full border-collapse space-y-1',
          head_row: 'flex',
          head_cell:
            'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
          row: 'flex w-full mt-2',
          cell: cn(
            'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md',
            props.mode === 'range'
              ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
              : '[&:has([aria-selected])]:rounded-md'
          ),
          day: cn(
            buttonVariants({ variant: 'ghost' }),
            'h-8 w-8 p-0 font-normal aria-selected:opacity-100'
          ),
          day_range_start: 'day-range-start',
          day_range_end: 'day-range-end',
          day_selected:
            'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
          day_today: 'bg-accent text-accent-foreground',
          day_outside:
            'day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
          day_disabled: 'text-muted-foreground opacity-50',
          day_range_middle:
            'aria-selected:bg-accent aria-selected:text-accent-foreground',
          day_hidden: 'invisible',
          ...classNames,
        }}
        components={{
          IconLeft: () => <ChevronLeftIcon className="h-4 w-4" />,
          IconRight: () => <ChevronRightIcon className="h-4 w-4" />,
        }}
        onDayClick={handleDayClick}
        {...props}
      />
      {selectedDate && (
        <div className="mt-4 w-full rounded-lg bg-gray-100 p-6 shadow-md transition-colors duration-300 md:ml-4 md:mt-0 md:w-1/3 md:p-8">
          <h2 className="text-lg font-bold text-blue-600">
            Events on {selectedDate.toLocaleDateString()}:
          </h2>
          <ul className="list-disc pl-5">
            {dayEvents.length > 0 ? (
              dayEvents.map((event, index) => (
                <li
                  key={event.id}
                  className="flex items-center text-sm text-gray-800"
                >
                  <input
                    type="checkbox"
                    checked={event.done}
                    onChange={() => toggleEventDone(index)}
                    className="mr-2 accent-blue-600"
                  />
                  <span
                    className={event.done ? 'text-gray-500 line-through' : ''}
                  >
                    {event.title}
                  </span>
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-500">No events</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

Calendar.displayName = 'Calendar';

// Removed redundant export statement
