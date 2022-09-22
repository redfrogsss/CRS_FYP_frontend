interface SystemTextChatInterface {
    content: string;
}

export default function SystemTextChat({ content }: SystemTextChatInterface) {
    return (
        <div className="flex justify-start px-8 py-2">
            <div className="block px-4 pt-4 py-2 max-w-md rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 bg-blue-300">
                <p className="font-normal text-gray-700 dark:text-gray-400 break-words">
                    {content}
                </p>
                <p className="text-sm text-gray-400 text-right">21:00</p>
            </div>
        </div>
    );
}
