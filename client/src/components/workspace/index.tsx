import { useAppContext } from "@/context/AppContext"
import useWindowDimensions from "@/hooks/useWindowDimensions"
import { ACTIVITY_STATE } from "@/types/app"
import DrawingEditor from "../drawing/DrawingEditor"
import EditorComponent from "../editor/EditorComponent"

function index() {
    const { viewHeight } = useWindowDimensions()
    const { activityState } = useAppContext()

    return (
        <div
            className="absolute left-0 top-0 w-full max-w-full flex-grow overflow-x-hidden md:static"
            style={{ height: viewHeight }}
        >
            {activityState === ACTIVITY_STATE.DRAWING ? (
                <DrawingEditor />
            ) : (
                <EditorComponent />
            )}
        </div>
    )
}

export default index
