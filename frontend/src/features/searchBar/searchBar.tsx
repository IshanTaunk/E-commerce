import { useState } from "react";
import ResortDropdown from "../resortDropdown/resortDropdown";
import type { Resort } from "../../services/shared/model/Resort";
import "./searchBar.css";
import GuestCounter from "../guestCounter/GuestContainer";

interface BookingFormState {
  resort: Resort | null;
  nights: number;
  adults: number;
  children: number;
  checkInDate: string;
  checkOutDate: string;
}

/** 
    This will be a form, not a searchbar, the form will contain inputs like resort 
    selection, no. of nights, no. of adults/children, check-in date and checkout date input.
**/
const BookingBar = () => {
  const [formState, setFormState] = useState<BookingFormState>({
    resort: null,
    nights: 1,
    adults: 1,
    children: 0,
    checkInDate: "",
    checkOutDate: ""
  });

  const handleResortSelect = (resort: Resort) => {
    setFormState((prev) => ({
      ...prev,
      resort
    }));
    console.log("Selected resort:", resort);
  };

  const changeCount = (field: "adults" | "children", delta: number) => {
    setFormState((prev) => {
      const min = field === "adults" ? 1 : 0;
      return { ...prev, [field]: Math.max(min, prev[field] + delta) };
    });
  };

  const totalGuests = formState.adults + formState.children;

  const handleSearch = () => {
    console.log("Searching with:", formState);
  };

  return (
    <div className="booking-bar">
      <div className="booking-bar__fields">
        <div className="booking-bar__field">
          <label className="booking-bar__label">Where<span className="booking-bar__required">*</span></label>
          <ResortDropdown onSelect={handleResortSelect} />
        </div>

        <div className="booking-bar__field booking-bar__field--guests">
          <label className="booking-bar__label">No. of Guests<span className="booking-bar__required">*</span></label>
          <div className="booking-bar__guests-display">
            <span className="booking-bar__guests-icon">👥</span>
            <span className="booking-bar__guests-text">{totalGuests} guest{totalGuests !== 1 ? "s" : ""}</span>
          </div>
          <div className="booking-bar__guests-dropdown">
            <GuestCounter
              label="Adults"
              sublabel="Ages 18 or above"
              required
              value={formState.adults}
              onDecrement={() => changeCount("adults", -1)}
              onIncrement={() => changeCount("adults", 1)}
            />
            <GuestCounter
              label="Children"
              sublabel="Ages 0 - 17"
              value={formState.children}
              onDecrement={() => changeCount("children", -1)}
              onIncrement={() => changeCount("children", 1)}
            />
          </div>
        </div>
      </div>

      <button className="booking-bar__search-btn" onClick={handleSearch}>
        Search Availability
      </button>
    </div>
  );
};

export default BookingBar;