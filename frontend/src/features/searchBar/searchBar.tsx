import { useState } from "react";
import ResortDropdown from "../resortDropdown/resortDropdown";
import type { Resort } from "../../services/shared/model/Resort";

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

  return (
    <div>
      <ResortDropdown onSelect={handleResortSelect} />
      {formState.resort && (
        <p>Selected: {formState.resort.name} in {formState.resort.city}</p>
      )}
    </div>
  );
};

export default BookingBar;