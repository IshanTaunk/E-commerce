import * as React from "react";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./StayDatePicker.css";

interface StayDatePickerProps {
  range: DateRange | undefined;
  setRange: (range: DateRange | undefined) => void;
}

export default function StayDatePicker({ range, setRange }: StayDatePickerProps) {
  const [open, setOpen] = React.useState(false);

  const label =
    range?.from && range?.to
      ? `${format(range.from, "MMM d")} - ${format(range.to, "MMM d")}`
      : "Select check-in and check-out";

  return (
    <div className="stay-date-picker">
      <label htmlFor="stay-dates" className="stay-date-picker__label">
        Dates
      </label>

      <button
        id="stay-dates"
        type="button"
        onClick={() => setOpen(true)}
        className="stay-date-picker__trigger"
      >
        {label}
      </button>

      {open && (
        <div className="stay-date-picker__overlay" onClick={() => setOpen(false)}>
          <div className="stay-date-picker__modal" onClick={(e) => e.stopPropagation()}>
            <div className="stay-date-picker__summary">
              <div><strong>Check-in:</strong> {range?.from ? format(range.from, "MMM d, yyyy") : "--"}</div>
              <div><strong>Check-out:</strong> {range?.to ? format(range.to, "MMM d, yyyy") : "--"}</div>
            </div>

            <DayPicker
              mode="range"
              selected={range}
              onSelect={setRange}
              numberOfMonths={2}
              disabled={{ before: new Date() }}
            />

            <div className="stay-date-picker__actions">
              <button type="button" className="stay-date-picker__btn stay-date-picker__btn--clear" onClick={() => setRange(undefined)}>
                Clear
              </button>
              <button
                type="button"
                className="stay-date-picker__btn stay-date-picker__btn--done"
                onClick={() => setOpen(false)}
                disabled={!range?.from || !range?.to}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}