import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
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
import { Button } from "@/components/ui/button";

const crops = [
    "Bajra", "Barley", "Chana", "Cotton", "Groundnut", "Jowar", "Jute",
    "Maize", "Masur", "Moong", "Rice", "Soyabean", "Sugarcane",
    "Sunflower", "Tur", "Urad", "Wheat",
];

export function CropCombobox({ selectedCrop, setSelectedCrop }: any) {
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {selectedCrop ? selectedCrop : "Select crop..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder="Search crop..." />
                    <CommandEmpty>No crop found.</CommandEmpty>
                    <CommandGroup>
                        {crops.map((crop) => (
                            <CommandItem
                                key={crop}
                                value={crop}
                                onSelect={(currentValue) => {
                                    setSelectedCrop(currentValue);
                                    setOpen(false);
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        selectedCrop === crop ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {crop}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
