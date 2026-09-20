interface Props {
    children: React.ReactNode;
    loading?: boolean;
}

export default function Button({ children, loading }: Props) {
    return (
        <button
            className="w-full rounded-lg bg-blue-600 py-3  text-white font-semibold hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400 transition-colors"
            disabled={loading}
        >
            {loading ? "ingresando..." : children}
        </button>
    );
}

