import * as React from "react";
import { Check, ChevronsUpDown, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Import icons for different categories
import {
  // Property Highlights
  Star,
  Trophy,
  MapPin,
  Compass,
  Target,
  Heart,
  ThumbsUp,
  Award,

  // Building Features
  Building,
  Shield,
  ParkingCircle,
  Key,
  Lock,
  Users,
  Cctv,

  // Amenities
  Dumbbell,
  Waves,
  Trees,
  UtensilsCrossed,
  Wifi,
  Tv,
  Car,
  Coffee,

  // Legal Documents
  FileText,
  FileCheck,
  FileClock,
  FileWarning,
  Scale,
  Stamp,
  ClipboardCheck,
  ClipboardList,
} from "lucide-react";

type IconCategory = "highlights" | "features" | "amenities" | "documents";

const iconsByCategory: Record<IconCategory, Record<string, LucideIcon>> = {
  highlights: {
    Star,
    Trophy,
    MapPin,
    Compass,
    Target,
    Heart,
    ThumbsUp,
    Award,
  },
  features: {
    Building,
    Shield,
    Parking: ParkingCircle,
    Key,
    Lock,
    Users,
    Security: Cctv,
  },
  amenities: {
    Gym: Dumbbell,
    Pool: Waves,
    Garden: Trees,
    Kitchen: UtensilsCrossed,
    Wifi,
    Tv,
    Parking: Car,
    Cafe: Coffee,
  },
  documents: {
    Document: FileText,
    Verified: FileCheck,
    Pending: FileClock,
    Warning: FileWarning,
    Legal: Scale,
    Approved: Stamp,
    Checklist: ClipboardCheck,
    Requirements: ClipboardList,
  },
};

interface IconSelectProps {
  value: string;
  onChange: (value: string) => void;
  category: IconCategory;
}

export function IconSelect({ value, onChange, category }: IconSelectProps) {
  const [open, setOpen] = React.useState(false);
  const icons = iconsByCategory[category];
  const IconComponent = icons[value] || Object.values(icons)[0];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[50px] px-2"
        >
          <IconComponent className="h-4 w-4" />
          <ChevronsUpDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search icons..." />
          <CommandEmpty>No icon found.</CommandEmpty>
          <CommandGroup className="max-h-[300px] overflow-y-auto">
            {Object.entries(icons).map(([name]) => (
              <CommandItem
                key={name}
                value={name}
                onSelect={() => {
                  onChange(name);
                  setOpen(false);
                }}
              >
                {React.createElement(icons[name], {
                  className: "mr-2 h-4 w-4"
                })}
                {name}
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === name ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}