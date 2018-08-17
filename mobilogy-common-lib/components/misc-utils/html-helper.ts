import { HtmlHelperFactory } from '@aurea/protractor-automation-helper';

export class HtmlHelper extends HtmlHelperFactory {
    public static get tags() {
        return {
            div: 'div',
            h5: 'h5',
            h6: 'h6',
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            input: 'input',
            label: 'label',
            li: 'li',
            span: 'span',
            table: 'table',
            tbody: 'tbody',
            td: 'td',
            th: 'th',
            thead: 'thead',
            tr: 'tr',
            ul: 'ul',
            rect: 'rect',
            path: 'path',
            svg: 'svg',
            select: 'select',
            icon: 'i',
            fieldset: 'fieldset',
            anchor: 'a',
            textarea: 'textarea',
            button: 'button',
            pHeader: 'p-header'
        };
    }

    public static get xpathExpressions() {
        return {
            following: 'following',
            ancestor: 'ancestor',
            descendant: 'descendant',
            followingSibling: 'following-sibling',
            preceding: 'preceding',
            parent: 'parent'
        };
    }

    public static get extraAttributes() {
        return {
            acceptCharset: 'accept-charset',
            role: 'role',
            dataTip: 'data-tip',
            dataFor: 'data-for',
            ariaLabelledBy: 'aria-labelledby',
            dfTableId: 'df-table-id',
            dataHeader: 'data-header',
            title: 'title',
            value: 'value',
            text: 'text',
            name: 'name'
        };
    }

    public static get iPhoneAttributes() {
        return {
            typeStaticText: 'XCUIElementTypeStaticText',
            typeApplication: 'XCUIElementTypeApplication',
            typeButton: 'XCUIElementTypeButton',
            typeImage: 'XCUIElementTypeImage',
            typeWindow: 'XCUIElementTypeWindow',
            typeOther: 'XCUIElementTypeOther',
            typeLink: 'XCUIElementTypeLink',
            typeSecureTextField: 'XCUIElementTypeSecureTextField',
            typeTextView: 'XCUIElementTypeTextView',
            typeCell: 'XCUIElementTypeCell',
            typeTextField: 'XCUIElementTypeTextField',
            typeKeyboard: 'XCUIElementTypeKeyboard'
        };
    }

    public static get androidXpathAttributes() {
        return {
            typeTextView: 'android.widget.TextView',
            typeImageButton: 'android.widget.ImageButton',
            typeImageView: 'android.widget.ImageView',
            typeRelativeLayout: 'android.widget.RelativeLayout',
            typeViewGroup: 'android.view.ViewGroup',
            typeEditText: 'android.widget.EditText',
            typeFrameLayout: 'android.widget.FrameLayout',
            typeWidgetButton: 'android.widget.Button',
            typeLinearLayout: 'android.widget.LinearLayout',
            typeRecyclerView: 'android.support.v7.widget.RecyclerView'
        };
    }

    public static get mobileAttributes() {
        return {
            index: 'index',
            resourceId: 'resource-id'
        };
    }
}
