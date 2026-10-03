import {
    User,
    Phone,
    Mail,
    MapPin
} from "lucide-react";

const CustomerCard = ({ customer }) => {

    return (

        <div
            className="
                bg-white
                dark:bg-slate-900
                border
                dark:border-slate-600
                rounded-2xl
                shadow-sm
                overflow-hidden
            "
        >

            {/* Header */}

            <div
                className="
                    flex
                    items-center
                    gap-3
                    px-6
                    py-5
                    border-b
                "
            >

                <div
                    className="
                        p-2
                        rounded-lg
                        bg-blue-100
                        text-blue-600
                        dark:bg-slate-900
                        dark:text-blue-600

                    "
                >
                    <User size={20} />
                </div>

                <div>

                    <h2 className="font-semibold text-gray-900 dark:text-gray-400">
                        Customer Information
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Contact details
                    </p>

                </div>

            </div>

            {/* Content */}

            <div className="p-6 space-y-5">

                <InfoRow
                    icon={<User size={18} />}
                    label="Customer Name"
                    value={customer.name}
                />

                <InfoRow
                    icon={<Phone size={18} />}
                    label="Phone Number"
                    value={customer.phone}
                />

                <InfoRow
                    icon={<Mail size={18} />}
                    label="Email Address"
                    value={customer.email}
                />

                <InfoRow
                    icon={<MapPin size={18} />}
                    label="Address"
                    value={customer.address}
                />

            </div>

        </div>

    );

};

const InfoRow = ({ icon, label, value }) => (

    <div
        className="
            flex
            items-start
            gap-4
        "
    >

        <div
            className="
                mt-1
                text-gray-400
            "
        >
            {icon}
        </div>

        <div className="flex-1">

            <p
                className="
                    text-sm
                    text-gray-500
                    dark:text-gray-400
                "
            >
                {label}
            </p>

            <p
                className="
                    font-medium
                    text-gray-900
                    dark:text-white
                    wrap-break-word
                "
            >
                {value || "N/A"}
            </p>

        </div>

    </div>

);

export default CustomerCard;